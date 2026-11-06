import { Outlet, useLoaderData } from 'react-router'
import type { rootLayoutLoader } from './RootLayout.loader'
import { Aside } from '../components/aside/Aside'
import * as css from './RootLayout.css'
import { Header } from '../components/header/Header'

export function RootLayout() {
  const { articleList } = useLoaderData<typeof rootLayoutLoader>()

  return (
    <>
      <div className={css.mainFrame}>
        <Header />
        <Aside articleList={articleList} />
      </div>
      <main className={css.outletFrame}>
        <Outlet />
      </main>
    </>
  )
}
