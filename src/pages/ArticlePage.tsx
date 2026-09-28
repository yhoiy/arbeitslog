import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'

export function ArticlePage() {
  const { article } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return <div>{article.id}</div>
}
