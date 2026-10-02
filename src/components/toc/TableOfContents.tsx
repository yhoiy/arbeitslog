import { type HeadingBlockObjectResponse } from '#/src/features/notion/Heading'
import { RichText } from '#/src/features/notion/RichText'
import { richToPlain } from '#/utils/richToPlain'
import { slugify } from '#/utils/slugify'
import * as css from './TableOfContents.css'

export function TableOfContents({ titleBlocks }: { titleBlocks: HeadingBlockObjectResponse[] }) {
  const caseBlock = (block: HeadingBlockObjectResponse) => {
    switch (block.type) {
      case 'heading_1':
        return block.heading_1
      case 'heading_2':
        return block.heading_2
      case 'heading_3':
        return block.heading_3
      case 'heading_4':
        return block.heading_4
      default:
        return block satisfies never
    }
  }

  return (
    <ol>
      {titleBlocks.map(b => {
        const d = b.type === 'heading_1' ? 1 : b.type === 'heading_2' ? 2 : b.type === 'heading_3' ? 3 : 4
        return (
          <li key={b.id} className={css.depth[d]}>
            <a href={`#${slugify(richToPlain(caseBlock(b)?.rich_text))}`}>
              <RichText block={caseBlock(b)?.rich_text ?? []} />
            </a>
          </li>
        )
      })}
    </ol>
  )
}
