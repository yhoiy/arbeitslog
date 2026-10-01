import { style } from '@vanilla-extract/css'
import { li as bulletedLi } from './BulletedListItemBlock.css'
export const ol = style({
  listStylePosition: 'inside',
  margin: 0,
  padding: 0,
})

export const li = bulletedLi
