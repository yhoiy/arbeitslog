import type {
  BlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client'
import { RichText } from './RichText'
import { slugify } from '#/utils/slugify'
import { richToPlain } from '#/utils/richToPlain'
import { getLeveledHeading } from './Heading.util'

type Heading4BlockObjectResponse = Extract<BlockObjectResponse, { type: 'heading_4' }>

export type HeadingBlockObjectResponse =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse
  | Heading4BlockObjectResponse

const headingTag = { 1: 'h2', 2: 'h3', 3: 'h4', 4: 'h5' } as const

export function Heading({ block }: { block: HeadingBlockObjectResponse }) {
  const { level, content } = getLeveledHeading(block)
  const Tag = headingTag[level]

  return (
    <Tag id={slugify(richToPlain(getLeveledHeading(block).content.rich_text))}>
      <RichText block={content.rich_text} />
    </Tag>
  )
}
