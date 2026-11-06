import { style } from '@vanilla-extract/css'
import { baseFontSize } from './Block.css'

export const paragraph = style([
  baseFontSize,
  {
    lineHeight: 1.6,
  },
])
