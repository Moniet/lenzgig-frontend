import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const IMG = styled.img`
  max-width: 100%;
  height: auto;
  transition: opacity ease 500ms;
  opacity: ${({ show }) => (show ? 1 : 0)};
`

export default ({ src, alt }) => {
  const [show, setShow] = useState(false)

  return <IMG src={src} alt={alt} show={show} onLoad={() => setShow(true)} />
}
