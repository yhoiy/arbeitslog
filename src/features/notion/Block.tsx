import type { BlockWithChildren } from '#/types/notion.types'
import { Fragment, type PropsWithChildren } from 'react'
import * as css from './Block.css'
import { Heading } from './Heading'
import { Image } from './Image'
import { Paragraph } from './Paragraph'
import { BulletedListItem, BulletedListItemWrapper } from './BulletedListItem'
import { NumberedListItem, NumberedListItemWrapper } from './NumberedListItem'

export type BlockSequenceProps = { blocks: BlockWithChildren[]; indent?: boolean }
export function BlockSequence({ blocks, indent }: BlockSequenceProps) {
  const groupedBlocks = blocks.reduce<BlockWithChildren[][]>((acc, cur) => {
    if (cur.type === acc.at(-1)?.at(-1)?.type) acc.at(-1)?.push(cur)
    else acc.push([cur])
    return acc
  }, [])

  return (
    <>
      {groupedBlocks.map(group => {
        const WrapperComponent = groupRenderers[group[0].type] ?? Fragment
        return (
          <div key={group[0].id} className={indent ? css.childrenBlock : undefined}>
            <WrapperComponent>
              {group?.map(cb => (
                <Block key={cb.id} block={cb} />
              ))}
            </WrapperComponent>
          </div>
        )
      })}
    </>
  )
}

const groupRenderers: Partial<Record<BlockWithChildren['type'], React.ComponentType<PropsWithChildren>>> = {
  bulleted_list_item: BulletedListItemWrapper,
  numbered_list_item: NumberedListItemWrapper,
}

function Block({ block }: { block: BlockWithChildren }) {
  return (
    <div className={css.blockBasicMargins}>
      {(() => {
        switch (block.type) {
          case 'audio':
            return
          case 'bookmark':
            return
          case 'breadcrumb':
            return
          case 'bulleted_list_item':
            return <BulletedListItem block={block} />
          case 'callout':
            return
          case 'code':
            return
          case 'column':
            return
          case 'column_list':
            return
          case 'divider':
            return
          case 'embed':
            return
          case 'file':
            return
          case 'equation':
            return
          case 'heading_1':
          case 'heading_2':
          case 'heading_3':
          case 'heading_4':
            return <Heading block={block} />
          case 'image':
            return <Image block={block} />
          case 'link_preview':
            return
          case 'numbered_list_item':
            return <NumberedListItem block={block} />
          case 'paragraph':
            return <Paragraph block={block} />
          case 'pdf':
            return
          case 'quote':
            return
          case 'table':
            return
          case 'table_of_contents':
            return
          case 'table_row':
            return
          case 'video':
            return

          //이하 미사용 블럭
          case 'child_database':
          case 'child_page':
          case 'link_to_page':
          case 'meeting_notes':
          case 'synced_block':
          case 'tab':
          case 'template':
          case 'to_do':
          case 'toggle':
          case 'transcription':
          case 'unsupported':
            return

          default:
            return block satisfies never
        }
      })()}
    </div>
  )
}
