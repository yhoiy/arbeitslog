import type { BlockWithChildren } from '#/types/notion.types'
import { Block } from './Block'

export function RenderNotionPage({ pageBlocks }: { pageBlocks: BlockWithChildren[] }) {
  return pageBlocks.map(b => <Block key={b.id} block={b} />)
}
