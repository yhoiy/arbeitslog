import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'
import { RenderNotionPage } from '../features/notion/RenderNotionPage'

export function ArticlePage() {
  const { article } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return (
    <div>
      <RenderNotionPage pageBlocks={article.blocks} />
    </div>
  )
}
