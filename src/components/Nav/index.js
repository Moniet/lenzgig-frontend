/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import Button from '../../common/Button'
import { has } from 'lodash'

import { ReactComponent as HamburgerIcon } from '../../assets/img/hamburger.svg'
import { landingBps } from '../../utils/responsive'
import { EarlyAccessDialog } from '../Dialog/EarlyAccessDialog'
import { StartSurveyDialog } from '../Dialog/StartSurveyDialog'
import { handleStartSurvey } from '../../utils/commonFunction'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  padding: 1em 2em;
  background: white;
  left: 50%;
  transform: translate(-50%);

  ${landingBps[0]} {
    justify-content: center;
  }
`

const LogoContainer = styled.div`
  max-width: 250px;

  svg {
    max-width: 100%;
    height: auto;
  }

  ${landingBps[1]} {
    max-width: 200px;
  }

  ${landingBps[2]} {
    min-width: 100px;
    max-width: 150px;
  }
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

  ${landingBps[1]} {
    flex-flow: column wrap;
    justify-content: center;
    & > * {
      margin-bottom: 1em;
    }
  }
`
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  box-shadow: ${({ fixed }) =>
    fixed ? '0px 3px 8px rgba(0,0,0,0.06)' : 'none'};
  transition: box-shadow 250ms ease;
  z-index: 2000;
`

const Hamburger = styled.button`
  position: absolute;
  top: -0.75em;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: none;
  margin: 2.25em 2em;
  padding: 0;
  opacity: 0;
  transition: opacity 500ms ease;
  outline: none;

  svg {
    width: 100%;
    fill: #838383;
  }

  ${landingBps[1]} {
    opacity: 1;
  }
  ${landingBps[2]} {
    width: 1.5rem;
    height: 1.5rem;
  }

  z-index: 10000;
`

const NavList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  top: 50%;
  left: 50%;
  justify-content: space-evenly;
  transform: scale(1);

  ${landingBps[1]} {
    position: absolute;
    flex-flow: column wrap;
    justify-content: space-evenly;
    padding: 1em;
    height: 300px;
    width: 250px;
    left: 0;
    bottom: 0;
    margin-top: 2em;
    margin-left: 2em;
    background: white;
    border: solid 1px black;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    z-index: 3000;
    border-radius: 10px;
    transform: ${({ showDropdown }) =>
      showDropdown ? 'scale(1)' : 'scale(0)'};
    transition: transform 250ms ease;
  }
`

export default () => {
  const theme = useTheme()
  const [fixed, setFixed] = useState(false)
  const dropdown = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showDialog, setEarlyAccessDialog] = useState(false)
  const [showStartSurveyDialog, setStartSurveyDialog] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const handleScroll = e => {
    if (window.scrollY > 1) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  const handleSnackbar = () => {
    setShowSnackbar(!showSnackbar)
    setSnackbarMessage('');
  }

  const handleClick = () => {
    setShowDropdown(!showDropdown)
  }

  const handleEarlyAccessDialog = () => {
    setEarlyAccessDialog(!showDialog)
  }

  const handleStartSurveyDialog = () => {
    setEarlyAccessDialog(false)
    setStartSurveyDialog(!showStartSurveyDialog)
  }

  const handleStartSurveySubmit = async (userObject = {}) => {
    const userData = await handleStartSurvey(userObject)
    if (!has(userData, 'error')) {
      console.log('successfull', userData)
      handleStartSurveyDialog()
    } else {
      console.log('signup error occured', userData)
      setSnackbarMessage(userData.error.message);
      setShowSnackbar(!showSnackbar)
    }
  }

  useEffect(() => {
    //get body
    // add resize event listener
    // boundingRect, if it is lesser than X then don't show else dont show

    // let body = document.querySelector('body')
    // let bodySize = body.getBoundingClientRect().width

    // if (bodySize < 1125) {
    //   if (dropdown.current) {
    //     if (showDropdown) dropdown.current.style.transform = 'scale(1)'
    //     else dropdown.current.style.transform = 'scale(0)'
    //   }
    // }

    window.addEventListener('scroll', handleScroll)
  }, [dropdown, fixed, showDropdown, showDialog, showStartSurveyDialog])

  return (
    <header>
      <Nav fixed={fixed}>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <NavList showDropdown={showDropdown}>
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
            <Button
              border
              color={theme.colors.primary}
              onClick={handleEarlyAccessDialog}
            >
              Get early access
            </Button>
          </NavList>

          <Hamburger onClick={e => handleClick()}>
            <HamburgerIcon />
          </Hamburger>

          <EarlyAccessDialog
            showDialog={showDialog}
            handleEarlyAccessDialog={handleEarlyAccessDialog}
            handleStartSurveyDialog={handleStartSurveyDialog}
            handleStartSurveySubmit={handleStartSurveySubmit}
            handleSnackbar={handleSnackbar}
            showSnackbar={showSnackbar}
            snackbarMessage={snackbarMessage}
            theme={theme}
          />

          <StartSurveyDialog
            showStartSurveyDialog={showStartSurveyDialog}
            handleStartSurveyDialog={handleStartSurveyDialog}
            theme={theme}
          />
        </Container>
      </Nav>
    </header>
  )
}
