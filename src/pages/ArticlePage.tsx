import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'
import { BlockSequence } from '../features/notion/Block'

export function ArticlePage() {
  const { article } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return (
    <div>
      <BlockSequence blocks={article.blocks} />
    </div>
  )
}
