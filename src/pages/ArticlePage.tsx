import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'
import { BlockSequence } from '../features/notion/Block'
import { TableOfContents } from '../components/toc/TableOfContents'
import * as css from './ArticlePage.css'
import { ArticleMeta } from '../features/articleMeta/ArticleMeta'

export function ArticlePage() {
  const { article, titleBlocks } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return (
    <>
      <ArticleMeta article={article} />
      <div className={css.articlePageFrame}>
        <TableOfContents titleBlocks={titleBlocks} />
        <BlockSequence blocks={article.blocks} />
      </div>
    </>
  )
}
