import type { RichTextItemResponse } from '@notionhq/client'

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
  const WrapperComponent = richtext.href ? 'a' : 'div'
  return (
    <WrapperComponent href={richtext.href ?? undefined} target="_blank" rel="noreferrer">
      {(() => {
        switch (richtext.type) {
          case 'text':
            return <span>{richtext.text.content}</span>
          case 'equation':
            return <span>{richtext.equation.expression}</span>
          default:
            return null
        }
      })()}
    </WrapperComponent>
  )
}
