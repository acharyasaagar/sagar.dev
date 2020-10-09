import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Textfield from '@material-ui/core/TextField'
import TelegramIcon from '@material-ui/icons/Telegram'
import { makeStyles } from '@material-ui/core/styles'

import Social from '../base/Social'
import MessageResultSnackBar from './MessageResultSnackBar'

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  formGrid: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  formControl: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
      textAlign: 'left',
    },
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    '& > *': {
      color: theme.palette.common.white,
    },
  },
  sendButton: {
    background: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
}))

const FooterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [snackBar, setSnackBar] = useState({ open: false })

  const closeSnackBar = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackBar({ open: false })
  }

  const classes = useStyles()

  const handleNameChange = e => setName(e.target.value)
  const handleEmailChange = e => setEmail(e.target.value)
  const handleMessageChange = e => setMessage(e.target.value)

  const sendMessage = async e => {
    e.preventDefault()
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
      })
      if (res.status === 200) {
        return setSnackBar({
          open: true,
          severity: 'success',
          message: 'Message sent',
          onClose: closeSnackBar,
        })
      }
      throw new Error('Response status was not 200')
    } catch (err) {
      console.log(err)
      setSnackBar({
        open: true,
        severity: 'error',
        message: 'Something went wrong',
        onClose: closeSnackBar,
      })
    }
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className={classes.formContainer}>
      <form
        className={classes.formGrid}
        autoComplete="off"
        onSubmit={sendMessage}
      >
        <Textfield
          label="Your Name"
          placeholder="Sagar Acharya"
          variant="filled"
          required
          className={classes.formControl}
          value={name}
          onChange={handleNameChange}
        />
        <Textfield
          label="Your Email"
          type="email"
          placeholder="acharyasagar@mail.com"
          variant="filled"
          required
          className={classes.formControl}
          value={email}
          onChange={handleEmailChange}
        />

        <Textfield
          label="Your Message"
          placeholder="Hey Sagar, Let's chat about..."
          variant="filled"
          rows={5}
          rowsMax={5}
          multiline
          required
          className={classes.formControl}
          value={message}
          onChange={handleMessageChange}
        />
        <div className={classes.formControl}>
          <Button
            variant="contained"
            type="submit"
            startIcon={<TelegramIcon />}
            className={classes.sendButton}
          >
            Send message
          </Button>
        </div>
      </form>
      <Hidden mdUp>
        <Social />
      </Hidden>
      <MessageResultSnackBar snackBar={snackBar} />
    </div>
  )
}

export default FooterForm
