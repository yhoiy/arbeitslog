import { style, styleVariants } from '@vanilla-extract/css'

export const defaultMargin = style({
  marginLeft: '1em',
  marginBottom: '4rem',
})

export const tocHeading = style({
  fontFamily: `'Hoi747', sans-serif`,
  fontWeight: 400,
  color: '#777',
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

export const list = style({
  fontFamily: `'Hoi747', sans-serif`,
  color: '#777',
  lineHeight: 1.4,
  fontSize: '0.9rem',
  '@media': {
    '(hover:hover) and (pointer:fine)': {
      selectors: {
        '&:hover': {
          textDecoration: 'underline',
          textUnderlineOffset: '0.2rem',
        },
      },
    },
  },
})
