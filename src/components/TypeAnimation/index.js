/** @jsx jsx */
import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { keyframes, jsx, css } from '@emotion/core'
import { theme } from '../../utils/theme'
import Typed from 'typed.js'

const blink = keyframes`
  0% {
    border-right: none;
  }
  100% {
    border-right: solid 2px ${theme.primary};
  }
`

const literature = [' Brands', ' Companies', ' Influencers']

export default ({ component: Component }) => {
  const el = useRef(null)

  useEffect(() => {
    new Typed(el.current, {
      strings: literature,
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
      showCursor: false
    })
  }, [])

  return <span ref={el}></span>
}
