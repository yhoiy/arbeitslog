import { useRouteLoaderData } from 'react-router'
import type { rootLayoutLoader } from './RootLayout.loader'

export function MainPage() {
  const data = useRouteLoaderData<typeof rootLayoutLoader>('rootLayout')
  return <div>{data?.articleList.length}개의 글</div>
}
