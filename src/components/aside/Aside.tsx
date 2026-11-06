import type { ArticleObject } from '#/types/notion.types'
import { richToPlain } from '#/utils/richToPlain'
import { NavLink } from 'react-router'
import * as css from './Aside.css'
import { useAtom } from 'jotai'
import { asideAtom } from './Aside.atom'

export function Aside({ articleList }: { articleList: ArticleObject[] }) {
  const [open, setOpen] = useAtom(asideAtom)
  return (
    <div className={css.asideWrapper} data-open={open}>
      <div className={css.asideFrame}>
        <ul className={css.asideList}>
          {articleList.map(article => (
            <li key={article.id}>
              <NavLink to={`/${article.path}`} onClick={() => setOpen(false)}>
                {richToPlain(article.properties['제목'].type === 'title' ? article.properties['제목'].title : [])}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
