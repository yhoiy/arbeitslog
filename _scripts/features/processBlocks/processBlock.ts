import type { BlockWithChildren } from '../getNotionContents/getRecursiveBlocks.ts'
import { processMediaBlock } from './mediaBlocks.ts'

export async function processBlock(blocks: BlockWithChildren[]) {
  await Promise.all(
    blocks.map(async b => {
      await processMediaBlock(b)
      if (b.children) await processBlock(b.children)
    }),
  )
}
