import type { WithChildren } from '#/types/notion.types'
import type { NumberedListItemBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichText } from './RichText'
import type { PropsWithChildren } from 'react'
import * as css from './NumberedListItem.css'

export function NumberedListItemWrapper({ children, ...props }: PropsWithChildren) {
  return (
    <ol className={css.ol} {...props}>
      {children}
    </ol>
  )
}

export function NumberedListItem({ block }: { block: WithChildren<NumberedListItemBlockObjectResponse> }) {
  return (
    <li className={css.li}>
      <RichText block={block.numbered_list_item.rich_text} />
      {block.children && <BlockSequence blocks={block.children} indent />}
    </li>
  )
}
