import { style, styleVariants } from '@vanilla-extract/css'

export const defaultMargin = style({
  marginLeft: '1em',
})

export const levelMargin = styleVariants({
  0: {
    paddingLeft: 0,
  },
  1: {
    paddingLeft: '0.75em',
  },
  2: {
    paddingLeft: '1.5em',
  },
  3: {
    paddingLeft: '2.25em',
  },
  4: {
    paddingLeft: '3em',
  },
})
