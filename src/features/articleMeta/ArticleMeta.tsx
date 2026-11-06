import type { ArticleObject } from '#/types/notion.types'
import { RichText } from '../notion/RichText'
import * as css from './ArticleMeta.css'

export function ArticleMeta({ article }: { article: ArticleObject }) {
  return (
    <div className={css.articleMetaFrame}>
      <h1 className={css.articleTitle}>
        {article.properties['제목']?.type === 'title' ? <RichText block={article.properties['제목']?.title} /> : ''}
      </h1>
      <div>{article.properties['작성일']?.type === 'rich_text'}</div>
    </div>
  )
}
