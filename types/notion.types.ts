import type { BlockObjectResponse, PageObjectResponse } from '@notionhq/client'

export type BlockWithChildren = BlockObjectResponse & { children?: BlockWithChildren[] }

export type ArticleObject = PageObjectResponse & {
  blocks: BlockWithChildren[]
  path?: string
}
