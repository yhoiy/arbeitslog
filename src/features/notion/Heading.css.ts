import { style } from '@vanilla-extract/css'
import { baseFontSize } from './Block.css'

export const headingTypo = style([
  baseFontSize,
  {
    fontFamily: `'Hoi747', sans-serif`,
    fontWeight: 600,
    margin: '2rem 0 1rem 0',
  },
])
