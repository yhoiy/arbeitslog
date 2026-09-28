import type { ArticleObject } from '#/types/notion.types'
import { data, type LoaderFunctionArgs } from 'react-router'

export const articlePageLoader = async ({ url }: LoaderFunctionArgs) => {
  const response = await fetch(`/data/${url.pathname}.json`)
  if (!(response.headers.get('Content-Type')?.includes('application/json') || !response.ok))
    throw data('not found', { status: 404 })

  const article = (await response.json()) as ArticleObject
  return {
    article,
  }
}
