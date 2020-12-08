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

import logo from '../../assets/logo.png'
import rick from '../../assets/rick.png'

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
    backgroundColor: '#B7E4F9'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  },
  content: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
  },
  grid: {
    width: '100%',
    height: 'calc(100% - 64px)'
  },
  logo: {
    height: '100%',
    maxHeight: '64px'
  },
  hero: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%'
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
          <img src={logo} className={classes.logo} alt='Rick and morty logo'></img>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{paper: classes.drawerPaper}}
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
          <img src={rick} className={classes.hero} alt='Rick Sanchez and Morty Smith'></img>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        { children }
      </main>
    </div>
  )
}
