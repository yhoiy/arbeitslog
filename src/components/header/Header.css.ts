import { style } from '@vanilla-extract/css'

export const headerFrameBase = style({
  marginBlock: '0.75rem',
  marginInline: '1rem',
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
})

export const difference = style({
  position: 'relative',
  zIndex: 11,
  color: 'white',
  mixBlendMode: 'difference',
})

export const headerMenuButton = style({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '1rem',
  lineHeight: 1,
  fontWeight: 400,
  margin: 0,
  paddingBlock: '0.2rem',
  paddingInline: 0,
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
})
