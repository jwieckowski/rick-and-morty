import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  }
})

const Locations = () => {
  const classes = useStyles()
  
  return (
    <Grid className={classes.root}>
      Locations
    </Grid>
  )
}
export default Locations