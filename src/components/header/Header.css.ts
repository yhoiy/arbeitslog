import { style } from '@vanilla-extract/css'

export const headerFrame = style({
  marginBlock: '0.75rem',
  marginInline: '1rem',
  backgroundColor: 'white',
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
})

export const headerMenuButton = style({
  display: 'block',
  margin: 0,
  padding: 0,
  height: '1.125rem',
  backgroundColor: 'transparent',
  border: 'none',
  font: 'inherit',
})
