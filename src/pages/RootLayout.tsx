import { Outlet, useLoaderData } from 'react-router'
import type { rootLayoutLoader } from './RootLayout.loader'
import { Aside } from '../components/aside/Aside'
import * as css from './RootLayout.css'

export function RootLayout() {
  const { articleList } = useLoaderData<typeof rootLayoutLoader>()
  return (
    <div className={css.mainFrame}>
      <Aside articleList={articleList} />
      <main className={css.outletFrame}>
        <Outlet />
      </main>
    </div>
  )
}
