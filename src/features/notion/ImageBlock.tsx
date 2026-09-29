import type { ImageBlockObjectResponse } from '@notionhq/client'
import { RichTextBlock } from './RichText'

export function ImageBlock({ block }: { block: ImageBlockObjectResponse }) {
  const src = block.image.type === 'file' ? block.image.file.url : block.image.external.url
  const captionText = block.image.caption.map(r => r.plain_text).join('')

  return (
    <figure>
      <img src={src} alt={captionText} />
      <figcaption>
        <RichTextBlock block={block.image.caption} />
      </figcaption>
    </figure>
  )
}
