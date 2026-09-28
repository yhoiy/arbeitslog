import { type PageObjectResponse } from '@notionhq/client'
import { notion } from './notion.ts'
import { getRecursiveBlocks, type BlockWithChildren } from './getRecursiveBlocks.ts'

export type ArticleObject = PageObjectResponse & {
  blocks: BlockWithChildren[]
}

export async function getFullArticle(page: PageObjectResponse): Promise<ArticleObject> {
  const { id: page_id } = page
  const { id: block_id } = await notion.pages.retrieve({
    page_id,
  })

  const blocks = await getRecursiveBlocks(block_id)

  return {
    ...page,
    blocks,
  }
}
