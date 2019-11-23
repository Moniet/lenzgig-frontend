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
import { landingBps } from '../../utils/responsive'

const Container = styled.div`
  position: relative;
  display: block;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: visible;
  padding: 0 2em;

  & > * {
    margin-bottom: 4em;
  }
  ${landingBps[0]} {
    width: 100%;
  }

  ${landingBps[2]} {
    & > * {
      margin-bottom: 0em;
    }
  }
`

const Intro = styled.div`
  margin: 12em 0;

  ${landingBps[2]} {
    margin: 5em 0 1em;
  }
`

const Half = styled.div`
  position: relative;
  flex: 1 0 50%;
  width: 50%;

  ${landingBps[0]} {
    width: 100%;
  }
`

const Onboarding = styled.div`
  overflow: visible;
  white-space: nowrap;
  
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

    ${landingBps[2]} {
      font-size: 0.75em;
    }
  }
              


     ${landingBps[1]} {
    white-space: normal;
    overflow: hidden;

  }
`

const Input = styled.input`
  border-radius: 5px;
  border: solid 1px ${({ negative }) => (negative ? 'white' : '#707070')};
  color: ${({ negative }) => (negative ? 'white' : 'black')};
  font-weight: 600;
  background: transparent;
  padding: 1em;
  max-height: 4em;
  outline: none;
  font-size: 0.8em;
  width: 100%;
  max-width: 260px;
  min-width: 200px;
  flex: 1 1 0;
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

const H2 = styled.h2`
  font-weight: 900;
  color: #333;
  font-size: 3.25em;
  margin-bottom: 0.5em;
  text-align: center;

  ${landingBps[2]} {
    font-size: 1.75rem;
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
          <Flex justifyLeft alignTop>
            <Half>
              <Onboarding>
                <H2>
                  Create AR & VR For
                  <br />
                  The Coolest Brands
                </H2>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 70%;
                    margin: 0 auto;
                    text-align: left;

                    ${landingBps[0]} {
                      align-items: center;
                      justify-content: center;
                      text-align: center;
                    }
                  `}
                >
                  <h4>You Create! We'll Handle The Rest</h4>
                  <Form
                    css={css`
                      ${landingBps[0]} {
                        text-align: center;
                      }

                      ${landingBps[1]} {
                        display: none;
                      }
                    `}
                  >
                    <label>Want to get early access to our platform?</label>
                    <div
                      css={css`
                        display: flex;
                        justify-content: flex-start;
                        margin-top: 1em;

                        ${landingBps[0]} {
                          justify-content: center;
                        }
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
            </Half>
            <Half
              css={css`
                min-width: 300px;
                min-height: 280px;

                ${landingBps[2]} {
                  margin-top: -2em;
                }
              `}
            >
              <Illustration
                css={css`
                  position: absolute;
                  top: -20vh;
                  right: calc(-1 * (49vw - 500px));
                  width: 850px;
                  max-width: 180%;
                  z-index: -1;
                  ${landingBps[1]} {
                    min-width: 500px;
                    max-width: 500px;
                    top: 0;
                    right: -2em;
                    width: 100%;
                  }
                `}
              />
            </Half>
            <Half>
              <Form
                css={css`
                  font-size: 12px;
                  display: none;

                  ${landingBps[1]} {
                    display: block;
                    margin-top: 15em;
                    text-align: center;
                  }
                `}
              >
                <label>Want to get early access to our platform?</label>
                <div
                  css={css`
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 1em;

                    ${landingBps[0]} {
                      justify-content: center;
                    }
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
            </Half>
          </Flex>
        </Intro>
        <Flex direction={'column'}>
          <h3
            css={css`
              font-weight: 700;
              font-size: 2em;

              ${landingBps[2]} {
                font-size: 1.15em;
                text-align: center;
              }
            `}
          >
            An AR community for everyone.
          </h3>
          <p
            css={css`
              font-size: 1.25rem;
              margin-bottom: 1em;

              ${landingBps[2]} {
                font-size: 1em;
                text-align: center;
              }
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

                ${landingBps[2]} {
                  font-size: 1em;
                }
              }
              ${landingBps[2]} {
                justify-content: space-between;
                & > * {
                  margin-top: 1em;
                }
              }

              display: flex;
            `}
          >
            <Flex direction={'row'} justifyLeft>
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

              ${landingBps[2]} {
                font-size: 0.75em;
                text-align: justify;
                width: 100%;
              }
            `}
          >
            LenzGig gives you everything you need to grow your clientele and
            expand your skills.
          </p>
        </Flex>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-top: 2em;
            grid-gap: 2em;
            overflow-x: scroll;
          `}
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
              <h3>Get Inspired</h3>
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
              <h3>Stay Ahead</h3>
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

          ${landingBps[2]} {
            padding: 2em 2em 0;
            margin-top: 2em;
          }

          & ::placeholder {
            color: white;
          }
        `}
      >
        <Flex direction={'column'}>
          <H2
            css={css`
              font-weight: 900;
              color: white;
              text-align: center;
              margin: 0;
            `}
          >
            Ready to be part of <br />
            our community?
          </H2>
          <Form
            css={css`
              width: 100%;
              margin-top: 3em;
              ${landingBps[2]} {
                margin-top: 2em;
              }
            `}
          >
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
                  padding: 0.708em 0;
                  margin-left: -1em;

                  ${landingBps[2]} {
                    padding: 0.71em 0;
                  }
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
            ${landingBps[1]} {
              width: calc(100% + 4rem);
              margin-left: -2em;
              margin-top: 2em;
              padding: 2em 4em;
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
    </>
  )
}
