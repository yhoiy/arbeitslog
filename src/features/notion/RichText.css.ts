import { style } from '@vanilla-extract/css'

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '0.25em',
  textDecorationStyle: 'dashed',
  textDecorationThickness: '1px',
})

export const strong = style({
  fontWeight: 600,
})
