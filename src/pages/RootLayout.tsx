import { Outlet, useLoaderData } from 'react-router'
import type { rootLayoutLoader } from './RootLayout.loader'
import { Aside } from '../components/aside/Aside'

export function RootLayout() {
  const { articleList } = useLoaderData<typeof rootLayoutLoader>()
  return (
    <div>
      <header></header>
      <Aside articleList={articleList} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
