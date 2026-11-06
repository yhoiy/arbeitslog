import { style } from '@vanilla-extract/css'

export const asideList = style({
  listStyleType: 'none',
  padding: '2.75rem 1rem',
  margin: 0,
})

export const asideWrapper = style({
  position: 'fixed',
  inset: 0,
  zIndex: 10,
  pointerEvents: 'none',
  color: 'white',
  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 280ms ease-in 520ms',
    pointerEvents: 'none',
  },

  selectors: {
    '&[data-open="true"]::after': {
      transform: 'scaleX(1)',
      transitionDelay: '0ms',
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  },
})

export const asideFrame = style({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'auto',
  clipPath: 'inset(50% 0 50% 0)',
  transition: 'clip-path 520ms ease-in-out',
  backgroundColor: 'black',
  selectors: {
    [`${asideWrapper}[data-open="true"] &`]: {
      clipPath: 'inset(0 0 0 0)',
      transitionDelay: '280ms',
    },
  },
})
