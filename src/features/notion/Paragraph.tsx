import type { WithChildren } from '#/types/notion.types'
import type { ParagraphBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichText } from './RichText'
import * as css from './Paragraph.css'

export function Paragraph({ block }: { block: WithChildren<ParagraphBlockObjectResponse> }) {
  const { paragraph, children } = block

  return (
    <>
      <p className={css.paragraph}>
        <RichText block={paragraph.rich_text} />
      </p>
      {children && <BlockSequence blocks={children} indent />}
    </>
  )
}
