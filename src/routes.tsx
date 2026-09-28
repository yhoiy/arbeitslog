import { createBrowserRouter, RouterProvider } from 'react-router'
import { Providers } from './providers'
import { MainPage } from './pages/MainPage'
import { mainPageLoader } from './pages/MainPage.loader'

const router = createBrowserRouter([{ path: '/', Component: MainPage, loader: mainPageLoader }])

export const Routes = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
