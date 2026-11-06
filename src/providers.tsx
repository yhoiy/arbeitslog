import { AsideProvider } from './components/aside/AsideContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AsideProvider>{children}</AsideProvider>
    </>
  )
}
