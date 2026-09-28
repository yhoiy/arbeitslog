import { useLoaderData } from 'react-router'
import type { mainPageLoader } from './MainPage.loader'

export function MainPage() {
  const { articleList } = useLoaderData<typeof mainPageLoader>()
  return (
    <div>
      {articleList.map(a => {
        const title = a.properties['제목']?.type === 'title' && a.properties['제목']?.title?.[0].plain_text
        return (
          <div key={a.id}>
            {title}
            {a.path}
          </div>
        )
      })}
    </div>
  )
}
