import { style } from '@vanilla-extract/css'

export const mainFrame = style({
  width: '100%',
  paddingInline: '1rem',
})

export const outletFrame = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
