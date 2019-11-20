// =======
// OPTIONS
// =======
// 1. fill
// 2. color
// 3. border
// 4. dark

import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { theme } from '../../utils/theme'

const selector = (bool, value, fallback) => {
  if (bool) return value
  else return fallback ? fallback : 'none'
}

const Button = styled.button`
  background: ${({ fill, color }) => selector(fill, color)};
  border: ${({ border, color }) => selector(border, `solid 2px ${color}`)};
  border-radius: 5px;
  color: ${({ dark, fill }) => (dark || fill ? 'white' : theme.colors.primary)};
  font-weight: bold;
  padding: 0.5em 1em;
  max-width: 200px;
`

export default props => {
  const { children } = props
  return <Button {...props}>{children}</Button>
}
