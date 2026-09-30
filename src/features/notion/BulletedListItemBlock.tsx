import type { WithChildren } from '#/types/notion.types'
import type { BulletedListItemBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichTextBlock } from './RichText'
import type { PropsWithChildren } from 'react'

export function BulletedListItemBlockWrapper({ children, ...props }: PropsWithChildren) {
  return <ul {...props}>{children}</ul>
}

export function BulletedListItemBlock({ block }: { block: WithChildren<BulletedListItemBlockObjectResponse> }) {
  return (
    <li>
      <RichTextBlock block={block.bulleted_list_item.rich_text} />
      {block.children && <BlockSequence blocks={block.children} indent />}
    </li>
  )
}
