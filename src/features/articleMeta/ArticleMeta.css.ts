import { style } from '@vanilla-extract/css'

export const articleMetaFrame = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const articleTitle = style({
  fontSize: '3rem',
  width: '100%',
  textAlign: 'center',
  marginTop: '2rem',
  letterSpacing: '-0.1rem',
  fontWeight: 600,
})

export const articleMeta = style({
  fontSize: '0.9rem',
  display: 'flex',
  gap: '0.25rem',
  marginTop: '1rem',
  marginBottom: '6rem',
})
