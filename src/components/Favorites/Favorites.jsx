import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  label: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '95%',
    overflow: 'auto',
    minWidth: '600px'
  }
}))

const Favorites = () => {
  const classes = useStyles()
  
  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Favorites</Typography>
      </Grid>
    </Grid>
  )
}
export default Favorites