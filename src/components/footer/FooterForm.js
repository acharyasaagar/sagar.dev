import React from 'react'

import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Textfield from '@material-ui/core/TextField'
import TelegramIcon from '@material-ui/icons/Telegram'
import { makeStyles } from '@material-ui/core/styles'

import Social from '../base/Social'

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
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
      <form className={classes.formGrid}>
        <Textfield
          label="Your Name"
          placeholder="Sagar Acharya"
          variant="filled"
          required
          className={classes.formControl}
        />
        <Textfield
          label="Your Email"
          placeholder="acharyasagar@mail.com"
          variant="filled"
          required
          className={classes.formControl}
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
        />
        <div className={classes.formControl}>
          <Button
            variant="contained"
            type="submit"
            startIcon={<TelegramIcon />}
            className={classes.sendButton}
          >
            Send me message
          </Button>
        </div>
      </form>
      <Hidden mdUp>
        <Social />
      </Hidden>
    </div>
  )
}

export default FooterForm
