import type { WithChildren } from '#/types/notion.types'
import type { BulletedListItemBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichText } from './RichText'
import type { PropsWithChildren } from 'react'
import * as css from './BulletedListItem.css'

export function BulletedListItemWrapper({ children, ...props }: PropsWithChildren) {
  return (
    <ul className={css.ul} {...props}>
      {children}
    </ul>
  )
}

export function BulletedListItem({ block }: { block: WithChildren<BulletedListItemBlockObjectResponse> }) {
  return (
    <li className={css.li}>
      <RichText block={block.bulleted_list_item.rich_text} />
      {block.children && <BlockSequence blocks={block.children} indent />}
    </li>
  )
}
