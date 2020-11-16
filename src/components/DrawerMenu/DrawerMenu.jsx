import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ExploreIcon from '@material-ui/icons/Explore'
import TagFacesIcon from '@material-ui/icons/TagFaces'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import SlideshowIcon from '@material-ui/icons/Slideshow'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HomeIcon from '@material-ui/icons/Home'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 0
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    width: '100%'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit'
  },
  content: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
  },
  grid: {
    width: '100%',
    height: 'calc(100% - 64px)'
  }
}))

const switchAvatar = (text) => {
  const avatars = {
    'Characters': <TagFacesIcon />,
    'Locations': <ExploreIcon />,
    'Episodes': <MovieFilterIcon />,
    'Home page': <HomeIcon />,
    'Watched': <SlideshowIcon />,
    'Favorites': <FavoriteIcon />
  }

  return avatars[text] || <HelpIcon />
}

export default function DrawerMenu({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Home page', 'Watched', 'Favorites'].map((text, index) => (
              <ListItem button key={index}>
                <Link to={text === 'Home page' ? '/' : text.toLowerCase()} className={classes.link}>
                  <ListItemIcon>{switchAvatar(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Characters', 'Locations', 'Episodes'].map((text, index) => (
              <ListItem button key={index}>
                <Link to={text.toLowerCase()} className={classes.link}>
                  <ListItemIcon>{switchAvatar(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        { children }
      </main>
    </div>
  )
}
