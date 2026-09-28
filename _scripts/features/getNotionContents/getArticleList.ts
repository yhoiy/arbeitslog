import { isFullPage } from '@notionhq/client'
import { notion } from './notion.ts'
import type { ExtendedPageObjectResponse } from '../../prebuild.ts'

export async function getArticleList(): Promise<ExtendedPageObjectResponse[]> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATASOURCE_ID!,
    filter: {
      and: [
        {
          property: '공개',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [{ property: '작성일', direction: 'descending' }],
  })

  return response.results.filter(isFullPage)
}
