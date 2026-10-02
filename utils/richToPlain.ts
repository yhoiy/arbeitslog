import type { RichTextItemResponse } from '@notionhq/client'

export function richToPlain(richText: RichTextItemResponse | RichTextItemResponse[]): string {
  if (!Array.isArray(richText)) return richText.plain_text
  return richText.map(item => item.plain_text).join('')
}
