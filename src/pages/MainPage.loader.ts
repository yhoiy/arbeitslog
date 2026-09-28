import type { ArticleObject } from 'types/notion.types'

export const mainPageLoader = async () => {
  const response = await fetch('/data/index.json')
  const articleList = (await response.json()) as ArticleObject[]
  return {
    articleList,
  }
}
