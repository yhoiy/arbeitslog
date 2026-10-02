import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'
import { BlockSequence } from '../features/notion/Block'
import { TableOfContents } from '../components/toc/TableOfContents'

export function ArticlePage() {
  const { article, titleBlocks } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return (
    <div>
      <TableOfContents titleBlocks={titleBlocks} />
      <BlockSequence blocks={article.blocks} />
    </div>
  )
}
