import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontSize: '100%',
  lineHeight: 1,
})

globalStyle('img', {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  margin: 0,
  padding: 0,
})

globalStyle('figure, figcaption', {
  margin: 0,
  padding: 0,
})

globalStyle('h1, h2, h3, h4, h5, h6, p, a', {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontSize: '1rem',
  fontWeight: 400,
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})

globalStyle('b, strong, em, i, u, strike', {
  fontWeight: 400,
  textDecoration: 'none',
})
