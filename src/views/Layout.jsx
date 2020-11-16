import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  }
}))

import DrawerMenu from '../components/DrawerMenu'

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid container maxwidth='xs' className={classes.root}>
      <DrawerMenu>
        { children }
      </DrawerMenu>
    </Grid>
  )
}

export default Layout