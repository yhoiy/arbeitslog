import { createBrowserRouter, RouterProvider } from 'react-router'
import { Providers } from './providers'
import { MainPage } from './pages/MainPage'
import { mainPageLoader } from './pages/MainPage.loader'
import { ArticlePage } from './pages/ArticlePage'
import { articlePageLoader } from './pages/ArticlePage.loader'
import { ErrorElement } from './pages/ErrorElement'

const router = createBrowserRouter([
  { path: '/', Component: MainPage, loader: mainPageLoader, errorElement: <ErrorElement /> },
  {
    path: '/:year/:month/:day/:slug',
    Component: ArticlePage,
    loader: articlePageLoader,
    errorElement: <ErrorElement />,
  },
])

export const Routes = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
