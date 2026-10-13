import { type HeadingBlockObjectResponse } from '#/src/features/notion/Heading'
import { getLeveledHeading } from '#/src/features/notion/Heading.util'
import { RichText } from '#/src/features/notion/RichText'
import { richToPlain } from '#/utils/richToPlain'
import { slugify } from '#/utils/slugify'

export function TableOfContents({ titleBlocks }: { titleBlocks: HeadingBlockObjectResponse[] }) {
  return <RecursiveList nodes={buildTree(titleBlocks)} />
}

type TocNode = {
  block: HeadingBlockObjectResponse
  level: number
  children: TocNode[]
}

function RecursiveList({ nodes }: { nodes: TocNode[] }) {
  return (
    <ol>
      {nodes.map(({ block, children }) => {
        const { rich_text } = getLeveledHeading(block).content
        return (
          <li key={block.id}>
            <a href={`#${slugify(richToPlain(rich_text))}`}>
              <RichText block={rich_text} />
            </a>
            {children.length > 0 && <RecursiveList nodes={children} />}
          </li>
        )
      })}
    </ol>
  )
}

function buildTree(blocks: HeadingBlockObjectResponse[]): TocNode[] {
  const root = { level: 0, children: [] as TocNode[] }
  const stack: { level: number; children: TocNode[] }[] = [root]

  for (const block of blocks) {
    const node = { block, level: getLeveledHeading(block).level, children: [] }
    while (stack.at(-1)!.level >= node.level) stack.pop()
    stack.at(-1)!.children.push(node)
    stack.push(node)
  }

  return root.children
}
