import { useLoaderData } from 'react-router'
import type { mainPageLoader } from './MainPage.loader'

export function MainPage() {
  const { articleList } = useLoaderData<typeof mainPageLoader>()
  return (
    <div>
      {articleList.map(article => (
        <div key={article}>{article}</div>
      ))}
    </div>
  )
}
