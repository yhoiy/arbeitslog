import { useLoaderData } from 'react-router'
import { articlePageLoader } from './ArticlePage.loader'
import { BlockSequence } from '../features/notion/Block'
import { TableOfContents } from '../components/toc/TableOfContents'
import * as css from './ArticlePage.css'
import { RichText } from '../features/notion/RichText'

export function ArticlePage() {
  const { article, titleBlocks } = useLoaderData<typeof articlePageLoader>()
  if (!article) return null
  return (
    <>
      <h1 className={css.articleTitle}>
        {article.properties['제목']?.type === 'title' ? <RichText block={article.properties['제목']?.title} /> : ''}
      </h1>
      <div className={css.articlePageFrame}>
        <TableOfContents titleBlocks={titleBlocks} />
        <BlockSequence blocks={article.blocks} />
      </div>
    </>
  )
}
