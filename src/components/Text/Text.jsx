import { styled } from '../../theme/stitches.config'
import { paddingVariants, marginVariants, fontVariants, colorVariants } from '../../theme/variants'


const Text = styled('p', {
  // display: 'block',
  variants: {
    as: {
      p: {
        display: 'block',
        // color: '$gray11'
      }
    }
  },
  defaultVariants: {
    as: 'p',
  }
}, paddingVariants, marginVariants, fontVariants, colorVariants)
export default Text

