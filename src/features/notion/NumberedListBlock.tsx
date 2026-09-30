import type { WithChildren } from '#/types/notion.types'
import type { NumberedListItemBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichTextBlock } from './RichText'

export function NumberedListItemBlockWrapper({ children }: { children: React.ReactNode }) {
  return <ol>{children}</ol>
}

export function NumberedListItemBlock({ block }: { block: WithChildren<NumberedListItemBlockObjectResponse> }) {
  return (
    <li>
      <RichTextBlock block={block.numbered_list_item.rich_text} />
      {block.children && <BlockSequence blocks={block.children} />}
    </li>
  )
}
