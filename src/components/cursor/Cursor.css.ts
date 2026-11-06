import { style } from '@vanilla-extract/css'

export const cursor = style({
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 9999,
})
