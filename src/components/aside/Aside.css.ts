import { style } from '@vanilla-extract/css'

export const asideList = style({
  listStyleType: 'none',
  padding: '1.5rem 1rem',
  margin: 0,
})

export const asideWrapper = style({
  position: 'relative',
  width: '100%',

  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
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
  height: 0,
  overflow: 'hidden',
  backgroundColor: 'black',
  color: 'white',
  transition: 'height 520ms ease-in-out',

  selectors: {
    [`${asideWrapper}[data-open="true"] &`]: {
      height: '75dvh',
      transitionDelay: '280ms',
    },
  },
})
