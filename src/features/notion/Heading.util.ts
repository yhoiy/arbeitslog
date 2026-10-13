import type { HeadingBlockObjectResponse } from './Heading'

export function getLeveledHeading(block: HeadingBlockObjectResponse) {
  switch (block.type) {
    case 'heading_1':
      return { level: 1, content: block.heading_1 } as const
    case 'heading_2':
      return { level: 2, content: block.heading_2 } as const
    case 'heading_3':
      return { level: 3, content: block.heading_3 } as const
    case 'heading_4':
      return { level: 4, content: block.heading_4 } as const
    default:
      return block satisfies never
  }
}
