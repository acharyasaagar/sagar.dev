import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    maxWidth: '62rem',
    border: `0.5px solid ${theme.palette.grey[300]}`,
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3)}px`,
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(2.75),
  },
  cardTitle: {
    marginBottom: theme.spacing(1.25),
  },
  cardText: {
    marginBottom: theme.spacing(0.75),
  },
  cardImage: {
    width: '4rem',
    height: '4rem',
  },
  cardButton: {
    marginLeft: `-${theme.spacing(1)}px`,
  },
}))

const EducationCard = props => {
  const {
    certificateTitle,
    certificationAuthority,
    startYear,
    finishYear,
    hasCertificate,
    certificateLink,
    imgSrc,
    imgAlt,
  } = props

  console.log(props)

  const showYear = () => (
    <Typography
      variant="body2"
      color="textSecondary"
      className={classes.cardText}
    >
      {startYear} - {finishYear}
    </Typography>
  )

  const showCertificateLink = () => (
    <Button
      variant="text"
      color="primary"
      className={classes.cardButton}
      href={certificateLink}
      target="_blank"
      endIcon={<OpenInNewIcon />}
    >
      View Certificate
    </Button>
  )

  const classes = useStyles()

  return (
    <Grid
      container
      spacing={2}
      className={classes.cardContainer}
      alignItems="center"
    >
      <Grid item sm={2}>
        <img src={imgSrc} alt={imgAlt} className={classes.cardImage} />
      </Grid>
      <Grid item sm={10}>
        <Typography variant="h6" className={classes.cardTitle}>
          {certificateTitle}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.cardText}
        >
          {certificationAuthority}
        </Typography>
        {startYear && finishYear ? showYear() : ''}
        {hasCertificate ? showCertificateLink() : ''}
      </Grid>
    </Grid>
  )
}

export default EducationCard
