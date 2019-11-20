import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import { theme } from '../../utils/theme'
import { useTheme } from 'emotion-theming'
import Flex from '../../common/Flex'
import Button from '../../common/Button'

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  max-width: 1100px;
  width: 100%;
  padding: 1em 2em;
  left: 50%;
  transform: translate(-50%);
  z-index: 2000;
`

const LogoContainer = styled.div`
  max-width: 250px;
`

const LinkContainer = styled.div`
  a {
    margin-right: 1.5em;
    color: ${({ color }) => color};
    font-weight: 700;
    letter-spacing: 1px;
  }

  a:last-of-type {
    margin-left: 0;
  }
`

const UL = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  div {
    align-items: center;
  }
`

export default () => {
  const theme = useTheme()

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <UL>
        <li>
          <LinkContainer color={theme.colors.gray}>
            <Link to="/">How it works</Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer color={theme.colors.gray}>
            <Link to="/">About</Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer color={theme.colors.gray}>
            <Link to="/">News</Link>
          </LinkContainer>
        </li>
      </UL>
      <Button border color={theme.colors.primary}>
        Get early access
      </Button>
    </Container>
  )
}
