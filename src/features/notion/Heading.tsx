import type {
  BlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client'
import { RichText } from './RichText'
import { slugify } from '#/utils/slugify'
import { richToPlain } from '#/utils/richToPlain'

type Heading4BlockObjectResponse = Extract<BlockObjectResponse, { type: 'heading_4' }>

export type HeadingBlockObjectResponse =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse
  | Heading4BlockObjectResponse

export function Heading({ block }: { block: HeadingBlockObjectResponse }) {
  return (() => {
    switch (block.type) {
      case 'heading_1':
        return (
          <h2 id={`${slugify(richToPlain(block.heading_1.rich_text))}`}>
            <RichText block={block.heading_1.rich_text} />
          </h2>
        )
      case 'heading_2':
        return (
          <h3 id={`${slugify(richToPlain(block.heading_2.rich_text))}`}>
            <RichText block={block.heading_2.rich_text} />
          </h3>
        )
      case 'heading_3':
        return (
          <h4 id={`${slugify(richToPlain(block.heading_3.rich_text))}`}>
            <RichText block={block.heading_3.rich_text} />
          </h4>
        )
      case 'heading_4':
        return (
          <h5 id={`${slugify(richToPlain(block.heading_4.rich_text))}`}>
            <RichText block={block.heading_4.rich_text} />
          </h5>
        )
      default:
        return null
    }
  })()
}
