import type { ImageBlockObjectResponse } from '@notionhq/client'
import { RichText } from './RichText'

export function Image({ block }: { block: ImageBlockObjectResponse }) {
  const src = block.image.type === 'file' ? block.image.file.url : block.image.external.url
  const captionText = block.image.caption.map(r => r.plain_text).join('')

  return (
    <figure>
      <img src={src} alt={captionText} />
      <figcaption>
        <RichText block={block.image.caption} />
      </figcaption>
    </figure>
  )
}
