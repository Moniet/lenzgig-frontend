/** @jsx jsx */
import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { ReactComponent as Illustration } from '../../assets/img/landing-page-illustration.svg'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import IMG from '../../common/IMG'
import Flex from '../../common/Flex'
import Nav from '../../components/Nav'
import Button from '../../common/Button'

// images
import instagram from '../../assets/img/instagram-icon.svg'
import facebook from '../../assets/img/facebook-icon.svg'
import snapchat from '../../assets/img/snapchat-icon.svg'
import shopify from '../../assets/img/shopify-icon.png'
import person1 from '../../assets/img/person-1.png'
import person2 from '../../assets/img/person-2.png'
import person3 from '../../assets/img/person-3.png'

const Container = styled.div`
  position: relative;
  display: block;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: visible;
  padding: 0 2em;
`

const Intro = styled.div`
  margin: 12em 0;
  min-height: calc(100vh - 12em);
`

const Half = styled.div`
  width: 50%;
`

const Onboarding = styled.div`
  overflow: visible;
  white-space: nowrap;
  h2 {
    font-weight: 900;
    color: #333;
    font-size: 3.25em;
    margin-bottom: 0.5em;
    overflow: visible;
    word-break: keep-all;
    text-align: center;
  }
  h4,
  h6 {
    color: #484848;
    width: 500px;
  }
  h4 {
    font-size: 1.25em;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
`

const Input = styled.input`
  border-radius: 5px;
  border: solid 1px ${({ negative }) => (negative ? 'white' : '#707070')};
  background: transparent;
  padding: 1em;
  max-height: 4em;
  outline: none;
  font-size: 0.8em;
  width: 260px;
`

const float = keyframes`
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-10px);
  }
`

const Icon = styled.span`
  display: block;
  margin: 0 0.5em;
  width: 2.5em;
  height: 2.5em;

  img {
    display: block;
    position: relative;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`

const Form = styled.form`
  position: relative;
  margin: 0 auto;
  text-align: left;
  min-width: 100%;
  margin-top: 4em;

  label {
    font-size: 1em;
    margin-top: 4em;
    font-weight: 500;
    margin-bottom: 2em;
    color: #484848;
  }
`

const CardIMG = styled.div`
  overflow: hidden;
  border-radius: 20px;

  img {
    object-fit: cover;
  }
`

const Card = styled.div`
  margin-right: 2em;
  flex-basis: 1;
  max-width: 250px;
  min-width: 200px;
  text-align: center;

  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1.5em 0 1.5em 0;
  }

  p {
    font-weight: 500;
  }
`

export default () => {
  const theme = useTheme()

  useEffect(() => {
    let dude = document.querySelector('#dude-man')
    dude.style.animation = `float 1.5s ease-in-out alternate infinite`
  }, [])

  return (
    <>
      <Container>
        <Intro>
          <Flex justifyLeft>
            <Half>
              <Flex>
                <Onboarding>
                  <h2>
                    Create AR & VR For
                    <br />
                    The Coolest Brands
                  </h2>
                  <div
                    css={css`
                    display:flex; 
                    flex-direction: column; 
                    align-items: flex-start;
                    width: 70%;
                    margin: 0 auto;
                    text-align: left:
                  `}
                  >
                    <h4>You Create! We'll Handle The Rest</h4>
                    <Form>
                      <label>Want to get early access to our platform?</label>
                      <div
                        css={css`
                          display: flex;
                          justify-content: flex-start;
                          margin-top: 1em;
                        `}
                      >
                        <Input placeholder="Your Email" />
                        <button
                          css={css`
                            background: ${theme.colors.primary};
                            color: white;
                            font-weight: bold;
                            border-radius: 0px 5px 5px 0px;
                            border: solid 1px ${theme.colors.primary};
                            margin-left: -1em;
                            ${'' /* width: 100px; */}
                            flex-basis: auto;
                            padding: 0.25em 2em;
                          `}
                        >
                          Sign Up
                        </button>
                      </div>
                    </Form>
                  </div>
                </Onboarding>
              </Flex>
            </Half>
          </Flex>
        </Intro>
        <Flex direction={'column'}>
          <h3
            css={css`
              font-weight: 700;
              font-size: 2rem;
            `}
          >
            An AR community for everyone.
          </h3>
          <p
            css={css`
              font-size: 1.25rem;
              margin-bottom: 1em;
            `}
          >
            Lenzgig is open to any platform, whether you are a creator for
          </p>
          <Flex
            css={css`
              h4 {
                font-weight: 700;
                margin: 0 1em 0 0;
                padding: 0;
                font-size: 1.25em;
              }

              display: flex;
            `}
          >
            <Flex direction={'row'} between>
              <Icon>
                <img src={instagram} alt="" />
              </Icon>
              <h4>Instagram</h4>
            </Flex>
            <Flex direction={'row'} align-center>
              <Icon>
                <IMG src={snapchat} alt="" />
              </Icon>
              <h4>Snapchat</h4>
            </Flex>
            <Flex direction={'row'} align-center>
              <Icon>
                <img src={facebook} alt="" />
              </Icon>
              <h4>Facebook</h4>
            </Flex>
            <Flex direction={'row'} align-center>
              <Icon>
                <img src={shopify} alt="" />
              </Icon>
              <h4>Shopify</h4>
            </Flex>
          </Flex>
          <p
            css={css`
              font-size: 1.25em;
              margin-top: 1.25em;
              font-weight: 500;
              width: calc(60% + 5vh);
              text-align: center;
            `}
          >
            LenzGig gives you everything you need to grow your clientele and
            expand your skills
          </p>
        </Flex>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-top: 2em;
            overflow-x: scroll;
          `}
          alignTop
        >
          <Card>
            <Flex direction={'column'} left>
              <CardIMG>
                <IMG src={person1} alt={''} />
              </CardIMG>
              <h3>Find Opportunity</h3>
              <p>
                Work on augmented realityprojects for some of the top companies,
                influencers, & brands. Find projects ranging from creating
                Filters and Lenses to AR Commerce and AR Ads
              </p>
            </Flex>
          </Card>
          <Card>
            <Flex direction={'column'} left>
              <CardIMG>
                <IMG src={person2} alt={''} />
              </CardIMG>
              <h3>Find Opportunity</h3>
              <p>
                Find inspiration, get support and collaborate with out network
                of like minded creators
              </p>
            </Flex>
          </Card>
          <Card>
            <Flex direction={'column'} left>
              <CardIMG>
                <IMG src={person3} alt={''} />
              </CardIMG>
              <h3>Find Opportunity</h3>
              <p>
                Stay up to date with the latest AR Tech and spatial computing
                news with the best AR urated resource feed on the internet
              </p>
            </Flex>
          </Card>
        </div>
      </Container>
      <footer
        css={css`
          padding: 4em 4em 0;
          width: 100vw;
          background: linear-gradient(to right, #8d48ff, #77bbff);
          margin-top: 4em;

          & ::placeholder {
            color: white;
          }
        `}
      >
        <Flex direction={'column'}>
          <h2
            css={css`
              font-weight: 900;
              color: white;
              text-align: center;
              font-size: 3rem;
            `}
          >
            Ready to be part of <br />
            our community?
          </h2>
          <Form>
            <Flex
              css={css`
                color: white;
              `}
            >
              <Input type="text" placeholder="Your Email" negative />
              <button
                css={css`
                  min-width: 100px;
                  ${'' /* padding: 1em 2em; */}
                  background: white;
                  font-weight: bold;
                  border-radius: 0 5px 5px 0;
                  color: #634ef9;
                  padding: 0.5em;
                  border: none;
                  padding: 0.7em 0;
                  margin-left: -1em;
                `}
              >
                Sign up
              </button>
            </Flex>
          </Form>
        </Flex>
        <div
          css={css`
            width: calc(100% + 8rem);
            margin-left: -4rem;
            background: white;
            padding: 4em;
            margin-top: 4em;
            svg {
              max-width: 250px;
              margin: 0 auto;
            }
          `}
        >
          <div
            css={css`
              max-width: 1000px;
              margin: 0 auto;
            `}
          >
            <Logo />
          </div>
        </div>
      </footer>
      <Illustration
        css={css`
          position: absolute;
          right: 0rem;
          top: 5em;
          max-width: 55vw;
          z-index: -1;
        `}
      />
    </>
  )
}
