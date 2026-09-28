import { isFullBlock, type BlockObjectResponse } from '@notionhq/client'
import { notion } from './notion.ts'

export type BlockWithChildren = BlockObjectResponse & { children?: BlockWithChildren[] }

export async function getRecursiveBlocks(block_id: string): Promise<BlockWithChildren[]> {
  let has_more: boolean = true
  let blocks: BlockWithChildren[] = []
  let start_cursor: string | undefined

  while (has_more) {
    const response = await notion.blocks.children.list({
      block_id,
      start_cursor,
      page_size: 100,
    })
    blocks.push(...response.results.filter(isFullBlock))
    has_more = response.has_more
    start_cursor = response.next_cursor ?? undefined
  }

  for (const block of blocks) {
    if (!block.has_children || block.type === 'child_page' || block.type === 'child_database') continue
    block.children = await getRecursiveBlocks(block.id)
  }

  return blocks
}
