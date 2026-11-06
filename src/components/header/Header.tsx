import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import * as css from './Header.css'
import { useAsideState } from '../aside/AsideContext'

export function Header() {
  const [_, setOpen] = useAsideState()

  return (
    <header className={css.headerFrameBase}>
      <div className={css.difference}>
        <button
          className={css.headerMenuButton}
          onClick={() => setOpen(v => !v)}
          aria-label="글 리스트를 열고 닫습니다"
        >
          <HamburgerMenuIcon width={18} height={18} />
        </button>
      </div>
      <button className={css.headerMenuButton} aria-label="글 리스트를 열고 닫습니다">
        *_*
      </button>
    </header>
  )
}
