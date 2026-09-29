import type { BlockWithChildren } from '#/types/notion.types'
import * as css from './Block.css'
import { HeadingBlock } from './HeadingBlock'
import { ImageBlock } from './ImageBlock'
import { ParagraphBlock } from './ParagraphBlock'

export type BlockSequenceProps = { blocks: BlockWithChildren[]; indent?: boolean }
export function BlockSequence({ blocks, indent }: BlockSequenceProps) {
  return (
    <>
      {blocks?.map(cb => (
        <div key={cb.id} className={indent ? css.childrenBlock : undefined}>
          <Block block={cb} />
        </div>
      ))}
    </>
  )
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
            return
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
            return <HeadingBlock block={block} />
          case 'image':
            return <ImageBlock block={block} />
          case 'link_preview':
            return
          case 'numbered_list_item':
            return
          case 'paragraph':
            return <ParagraphBlock block={block} />
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
