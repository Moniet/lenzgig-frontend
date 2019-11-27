/** @jsx jsx */
import React, { useState } from 'react'
import { Dialog, withStyles } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { Snackbar } from '@material-ui/core'

import IMG from '../../common/IMG'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import EarlyAccessHeader from '../../assets/img/early-access-header.png'
import { landingBps } from '../../utils/responsive'
import { handleSignUp } from '../../utils/commonFunction'

const Form = styled.form`
  position: relative;
  margin: 0 auto;
  text-align: center;
  min-width: 100%;
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

const LogoContainer = styled.div`
  max-width: 100px;
  margin: 0 auto;
`

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  headerImageContainer: {
    margin: '0 auto',
    maxWidth: '30%',
    marginBottom: '1em'
  },
  contentText: {
    color: '#484848',
    font: 'Bold 22px/31px Montserrat',
    letterSpacing: 0,
    marginBottom: '1em'
  },
  formContainer: {
    marginBottom: '1em'
  }
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}))(MuiDialogContent)

const EarlyAccessDialog = withStyles(styles)(props => {
  const { classes, theme } = props
  const [userEmail, setUserEmail] = useState({ email: '' })

  const handleEmailChange = e => {
    setUserEmail({ email: e.target.value })
  }

  const handleSubmit = event => {
    const formValue = handleSignUp(event)
    props.handleStartSurveySubmit(formValue)
  }

  return (
    <React.Fragment>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={props.showDialog}
        onClose={props.handleEarlyAccessDialog}
        maxWidth="xs"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={props.handleEarlyAccessDialog}
        ></DialogTitle>
        <DialogContent>
          <Box className={classes.headerImageContainer}>
            <IMG src={EarlyAccessHeader} alt="early access header logo" />
          </Box>
          <Typography
            css={css`
              color: #484848 !important;
              font-weight: bold !important;
              font-size: 22px !important;
              line-height: 31px !important;
              font-family: Montserrat !important;
              letter-spacing: 0 !important;
              margin-bottom: 1em !important;

              ${landingBps[1]} {
                font-size: 14px !important;
                line-height: 25px !important;
              }
            `}
          >
            Want to get early access to our platform and be part of our
            exclusive community?
          </Typography>
          <Box className={classes.formContainer}>
            <Form
              onSubmit={handleSubmit}
              css={css`
                font-size: 15px;
                ${landingBps[1]} {
                  font-size: 9px;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <Input
                  type="email"
                  required
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  value={userEmail.email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
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
          </Box>
          <Box>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Box>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        key="bottom-center"
        open={props.showSnackbar}
        onClose={props.handleSnackbar}
        message={<span id="message-id">{props.snackbarMessage}</span>}
      />
    </React.Fragment>
  )
})

export { EarlyAccessDialog }
