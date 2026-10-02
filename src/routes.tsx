import { createBrowserRouter, RouterProvider } from 'react-router'
import { Providers } from './providers'
import { MainPage } from './pages/MainPage'
import { rootLayoutLoader } from './pages/RootLayout.loader'
import { ArticlePage } from './pages/ArticlePage'
import { articlePageLoader } from './pages/ArticlePage.loader'
import { ErrorElement } from './pages/ErrorElement'
import { RootLayout } from './pages/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    id: 'rootLayout',
    loader: rootLayoutLoader,
    children: [
      {
        path: '/',
        Component: MainPage,
        errorElement: <ErrorElement />,
      },
      {
        path: '/:year/:month/:day/:slug',
        Component: ArticlePage,
        loader: articlePageLoader,
        errorElement: <ErrorElement />,
      },
    ],
  },
])

export const Routes = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
