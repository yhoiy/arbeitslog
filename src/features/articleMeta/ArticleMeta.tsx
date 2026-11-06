import type { ArticleObject } from '#/types/notion.types'
import { RichText } from '../notion/RichText'
import * as css from './ArticleMeta.css'

export function ArticleMeta({ article }: { article: ArticleObject }) {
  const title =
    article.properties['제목']?.type === 'title' ? <RichText block={article.properties['제목']?.title} /> : null
  const d = (article.properties['작성일']?.type === 'date' && article.properties['작성일']?.date?.start) || ''
  const dateObject = new Date(d)
  const dateString = [dateObject.getFullYear(), dateObject.getMonth() + 1, dateObject.getDate()].join('. ')

  return (
    <div className={css.articleMetaFrame}>
      <h1 className={css.articleTitle}>{title}</h1>
      <div className={css.articleMeta}>
        <span>{dateString}</span>
      </div>
    </div>
  )
}
