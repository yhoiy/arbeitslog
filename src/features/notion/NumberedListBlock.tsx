import type { WithChildren } from '#/types/notion.types'
import type { NumberedListItemBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichTextBlock } from './RichText'
import type { PropsWithChildren } from 'react'
import * as css from './NumberedListItem.css'

export function NumberedListItemBlockWrapper({ children, ...props }: PropsWithChildren) {
  return (
    <ol className={css.ol} {...props}>
      {children}
    </ol>
  )
}

export function NumberedListItemBlock({ block }: { block: WithChildren<NumberedListItemBlockObjectResponse> }) {
  return (
    <li className={css.li}>
      <RichTextBlock block={block.numbered_list_item.rich_text} />
      {block.children && <BlockSequence blocks={block.children} indent />}
    </li>
  )
}
