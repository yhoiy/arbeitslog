import type { RichTextItemResponse } from '@notionhq/client'
import { RichTextAnnotation } from './RichTextAnnotation'
import * as css from './RichText.css'

export function RichTextBlock({ block }: { block: RichTextItemResponse[] }) {
  return (
    <>
      {block.map((rt, i) => (
        <RichText key={i} richtext={rt} />
      ))}
    </>
  )
}

export function RichText({ richtext }: { richtext: RichTextItemResponse }) {
  const WrapperComponent = richtext.href ? 'a' : 'span'
  return (
    <WrapperComponent href={richtext.href ?? undefined} target="_blank" rel="noreferrer">
      <RichTextAnnotation annotations={richtext.annotations}>
        {(() => {
          switch (richtext.type) {
            case 'text':
              return <span className={richtext.href ? css.underline : undefined}>{richtext.text.content}</span>
            case 'equation':
              return <span>{richtext.equation.expression}</span>
            default:
              return null
          }
        })()}
      </RichTextAnnotation>
    </WrapperComponent>
  )
}
