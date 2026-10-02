import { styleVariants } from '@vanilla-extract/css'

export const depth = styleVariants({
  1: {
    marginLeft: '0.25rem',
  },
  2: {
    marginLeft: '0.5rem',
  },
  3: {
    marginLeft: '0.75rem',
  },
  4: {
    marginLeft: '1rem',
  },
})
