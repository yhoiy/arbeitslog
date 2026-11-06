import { createContext, useContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'

export type AsideState = [boolean, Dispatch<SetStateAction<boolean>>]
const AsideContext = createContext<AsideState>([false, () => {}])

export const useAsideState = () => useContext(AsideContext)

export function AsideProvider({ ...props }: PropsWithChildren) {
  const asideState = useState<boolean>(false)
  if (!AsideContext) throw new Error('AsideContext가 없습니다')

  return <AsideContext.Provider value={asideState} {...props} />
}
