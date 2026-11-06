import { style } from '@vanilla-extract/css'
import { baseFontSize } from './Block.css'

export const ul = style({
  listStylePosition: 'inside',
  margin: 0,
  padding: 0,
})

export const li = style([
  baseFontSize,
  {
    margin: 0,
    padding: 0,
  },
])
