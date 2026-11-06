import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useSetAtom } from 'jotai'
import { asideAtom } from '../aside/Aside.atom'
import * as css from './Header.css'

export function Header() {
  const setOpenAside = useSetAtom(asideAtom)
  return (
    <header className={css.headerFrame}>
      <button
        className={css.headerMenuButton}
        onClick={() => setOpenAside(v => !v)}
        aria-label="글 리스트를 열고 닫습니다"
      >
        <HamburgerMenuIcon width={18} height={18} />
      </button>
      <button className={css.headerMenuButton} aria-label="글 리스트를 열고 닫습니다">
        *_*
      </button>
    </header>
  )
}
