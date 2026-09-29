import type { Heading4BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import type {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client'
import { RichTextBlock } from './RichText'

type HeadingBlockObjectResponse =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse
  | Heading4BlockObjectResponse

export function HeadingBlock({ block }: { block: HeadingBlockObjectResponse }) {
  return (() => {
    switch (block.type) {
      case 'heading_1':
        return (
          <h2>
            <RichTextBlock block={block.heading_1.rich_text} />
          </h2>
        )
      case 'heading_2':
        return (
          <h3>
            <RichTextBlock block={block.heading_2.rich_text} />
          </h3>
        )
      case 'heading_3':
        return (
          <h4>
            <RichTextBlock block={block.heading_3.rich_text} />
          </h4>
        )
      case 'heading_4':
        return (
          <h5>
            <RichTextBlock block={block.heading_4.rich_text} />
          </h5>
        )
      default:
        return null
    }
  })()
}
