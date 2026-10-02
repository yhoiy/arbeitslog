import type { ArticleObject } from '#/types/notion.types'
import { richToPlain } from '#/utils/richToPlain'
import { NavLink } from 'react-router'

export function Aside({ articleList }: { articleList: ArticleObject[] }) {
  return (
    <ul>
      {articleList.map(article => (
        <li key={article.id}>
          <NavLink to={`/${article.path}`}>
            {richToPlain(article.properties['제목'].type === 'title' ? article.properties['제목'].title : [])}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
