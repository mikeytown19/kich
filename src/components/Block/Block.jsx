import React from 'react'
import { styled } from '../../theme/stitches.config'
import { paddingVariants } from '../../theme/variants'
const Block = ({ children, ...props }) => {

  return (
    <Wrapper {...props} className="block">
      {children}
    </Wrapper>
  )
}

export default Block

const Wrapper = styled('div', {
  p: '$4',
  '@bp2': {
    py: '$3',
    px: '$1'
  },

  variants: {
    w_full: {
      true: {
        width: '100%',
      }
    }
  }
  // border: '1px solid $red8',
}, paddingVariants)