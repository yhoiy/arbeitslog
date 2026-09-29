import type { WithChildren } from '#/types/notion.types'
import type { ParagraphBlockObjectResponse } from '@notionhq/client'
import { Block } from './Block'
import { RichTextBlock } from './RichText'

export function ParagraphBlock({ block }: { block: WithChildren<ParagraphBlockObjectResponse> }) {
  const { paragraph, children } = block

  return (
    <div>
      <RichTextBlock block={paragraph.rich_text} />
      {children?.map(cb => (
        <Block key={cb.id} block={cb} />
      ))}
    </div>
  )
}
