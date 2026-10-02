import type { ArticleObject } from '#/types/notion.types'
import { data, type LoaderFunctionArgs } from 'react-router'
import type { HeadingBlockObjectResponse } from '../features/notion/Heading'

export const articlePageLoader = async ({ url }: LoaderFunctionArgs) => {
  const response = await fetch(`/data/${url.pathname}.json`)
  if (!(response.headers.get('Content-Type')?.includes('application/json') || !response.ok))
    throw data('not found', { status: 404 })

  const article = (await response.json()) as ArticleObject
  const titleBlocks: HeadingBlockObjectResponse[] = article.blocks.filter(
    b => b.type === 'heading_1' || b.type === 'heading_2' || b.type === 'heading_3' || b.type === 'heading_4',
  )

  return {
    article,
    titleBlocks,
  }
}
