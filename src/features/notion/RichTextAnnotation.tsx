import type { AnnotationResponse } from '@notionhq/client'

type Props = { annotations: AnnotationResponse } & React.PropsWithChildren
type Wrapper = React.ComponentType<{ children: React.ReactNode }>

const annotationsMap = {
  code: ({ children }) => <code>{children}</code>,
  bold: ({ children }) => <strong>{children}</strong>,
  italic: ({ children }) => <em>{children}</em>,
  strikethrough: ({ children }) => <s>{children}</s>,
  underline: ({ children }) => <u>{children}</u>,
} satisfies Partial<Record<keyof AnnotationResponse, Wrapper>>

export function RichTextAnnotation({ annotations, children }: Props) {
  const keys = Object.keys(annotationsMap) as (keyof typeof annotationsMap)[]

  return keys.reduce<React.ReactNode>((acc, key) => {
    const Wrapper = annotationsMap[key]
    return annotations[key] ? <Wrapper>{acc}</Wrapper> : acc
  }, children)
}
