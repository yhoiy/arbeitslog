import type { ArticleObject } from 'types/notion.types'

export const rootLayoutLoader = async () => {
  const response = await fetch('/data/index.json')
  const articleList = (await response.json()) as ArticleObject[]
  return {
    articleList,
  }
}
