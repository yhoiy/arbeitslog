import type { WithChildren } from '#/types/notion.types'
import type { ParagraphBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichTextBlock } from './RichText'
import * as css from './ParagraphBlock.css'

export function ParagraphBlock({ block }: { block: WithChildren<ParagraphBlockObjectResponse> }) {
  const { paragraph, children } = block

  return (
    <>
      <p className={css.paragraph}>
        <RichTextBlock block={paragraph.rich_text} />
      </p>
      {children && <BlockSequence blocks={children} indent />}
    </>
  )
}
