import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import ProjectCardOverlay from './ProjectCardOverlay'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    position: 'relative',
    maxWidth: '20rem',
  },
  media: {
    height: 250,
  },
}))

const ProjectCard = props => {
  const { imgSrc, title, subtitle, githubURL, demoURL } = props
  const classes = useStyles()

  return (
    <div className={classes.cardContainer}>
      <ProjectCardOverlay demoURL={demoURL} githubURL={githubURL} />
      <Card className={classes.root} variant="outlined">
        <CardMedia className={classes.media} image={imgSrc} title={title} />
        <CardContent>
          <CardActionArea href={demoURL || githubURL} target="_blank">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h6"
                  component="h2"
                  color="primary"
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <OpenInNewIcon color="primary" fontSize="small" />
              </Grid>
            </Grid>
          </CardActionArea>
          <Typography variant="body2" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectCard
