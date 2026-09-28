import type { BlockWithChildren } from '../../../types/notion.types.ts'
import { processMediaBlock } from './mediaBlocks.ts'

export async function processBlock(blocks: BlockWithChildren[]) {
  await Promise.all(
    blocks.map(async b => {
      await processMediaBlock(b)
      if (b.children) await processBlock(b.children)
    }),
  )
}
