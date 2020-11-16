import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

import ExploreIcon from '@material-ui/icons/Explore'
import TagFacesIcon from '@material-ui/icons/TagFaces'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import HelpIcon from '@material-ui/icons/Help'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  link: {
    width: '100%',
    textDecoration: 'none',
    color: 'inherit'
  },
  text: {
    paddingLeft: theme.spacing(2)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

const switchAvatar = (text) => {
  const avatars = {
    'characters': <TagFacesIcon />,
    'locations': <ExploreIcon />,
    'episodes': <MovieFilterIcon /> 
  }

  return avatars[text] || <HelpIcon />
}

export default function TabItem({ text, link }) {
  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <Link to={'/' + text} className={classes.link}>
        <Paper elevation={4} className={classes.item}>
          <ListItemAvatar>
            <Avatar className={classes.large}>
              {switchAvatar(text)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            className={classes.text}
            primary={
              <Typography variant='h5'>
                { text.toUpperCase() }
              </Typography>
            }
          />
        </Paper>
      </Link>
    </ListItem>  
  )
}