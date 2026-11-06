import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalFontFace('Hoi747', {
  src: `url(/fonts/Hoi747-Regular.subset.woff2)`,
  fontWeight: 'normal',
})

globalFontFace('Hoi747', {
  src: `url(/fonts/Hoi747-SemiBold.subset.woff2)`,
  fontWeight: 'bold',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('::selection', {
  color: 'yellow',
  backgroundColor: 'blue',
})

globalStyle('html, input, button, a', {
  cursor: 'none',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontSize: '100%',
  lineHeight: 1,
  MozOsxFontSmoothing: 'grayscale',
  fontSmooth: 'antialised',
  fontFamily: `'Hoi747', serif`,
})

globalStyle('input, button, figure, h1, h2, h3, h4, h5, h6, figcaption, table', {
  fontFamily: `'Hoi747', sans-serif`,
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

globalStyle('h1, h2, h3, h4, h5, h6, p, a, li', {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontSize: 'inherit',
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
