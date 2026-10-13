import type { WithChildren } from '#/types/notion.types'
import type { QuoteBlockObjectResponse } from '@notionhq/client'
import { BlockSequence } from './Block'
import { RichText } from './RichText'
import * as css from './Quote.css'

export function Quote({ block }: { block: WithChildren<QuoteBlockObjectResponse> }) {
  const { quote, children } = block

  return (
    <blockquote className={css.quote}>
      <RichText block={quote.rich_text} />
      {children && <BlockSequence blocks={children} />}
    </blockquote>
  )
}
