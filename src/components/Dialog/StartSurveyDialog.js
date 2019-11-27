/** @jsx jsx */
import React, { useState } from 'react'
import { Dialog, withStyles } from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { jsx, css } from '@emotion/core'

import IMG from '../../common/IMG'
import StartSurveyHeader from '../../assets/img/start-survey-header.png'
import { landingBps } from '../../utils/responsive'

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
    maxWidth: '50%',
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

const DialogActions = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    justifyContent: 'center'
  }
}))(MuiDialogActions)

const StartSurveyDialog = withStyles(styles)(props => {
  const { classes, theme } = props
  const [showIframe, setShowIframe] = useState(false)

  const handleShowIframe = () => {
    setShowIframe(!showIframe);
  }

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={props.showStartSurveyDialog}
      onClose={props.handleStartSurveyDialog}
      maxWidth={!showIframe ? 'xs' : 'xl'}
    >
      {!showIframe ? (
        <React.Fragment>
          <DialogTitle
            id="customized-dialog-title"
            onClose={props.handleStartSurveyDialog}
          ></DialogTitle>

          <DialogContent>
            <Box className={classes.headerImageContainer}>
              <IMG src={StartSurveyHeader} alt="early access header logo" />
            </Box>
            <Typography
              css={css`
                color: #484848 !important;
                font-weight: bold !important;
                font-size: 34px !important;
                line-height: 31px !important;
                font-family: Montserrat !important;
                letter-spacing: 0 !important;
                margin-bottom: 0.5em !important;

                ${landingBps[1]} {
                  font-size: 22px !important;
                  line-height: 25px !important;
                }
              `}
            >
              You're on the list! Want priority access?
            </Typography>
            <Typography
              css={css`
                color: #484848 !important;
                font-weight: 500 !important;
                font-size: 12px !important;
                line-height: 20px !important;
                font-family: Montserrat !important;
                letter-spacing: 0 !important;
                margin-bottom: 1em !important;

                ${landingBps[1]} {
                  font-size: 8px !important;
                  line-height: 15px !important;
                }
              `}
            >
              We are looking for early adopters like you to give us feedback.
            </Typography>
          </DialogContent>

          <DialogActions className={classes.formContainer}>
            <button
              type="button"
              autoFocus
              onClick={handleShowIframe}
              css={css`
                background: ${theme.colors.primary};
                color: white;
                font-weight: bold;
                border-radius: 5px;
                border: solid 1px ${theme.colors.primary};
                flex-basis: auto;
                padding: 0.7em 1em;
              `}
            >
              Start Survey
            </button>
          </DialogActions>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <DialogContent>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSco2nDq1_HR-jTl5q8G2W1TyTQbnhqvS8H5RtFSakD6eE3tGg/viewform?embedded=true"
              width="640"
              height="666"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </DialogContent>
        </React.Fragment>
      )}
    </Dialog>
  )
})

export { StartSurveyDialog }
