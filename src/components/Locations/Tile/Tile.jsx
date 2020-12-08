import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  tile: {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  text: {
    width: '80%',
    textAlign: 'center'
  }
}))

const Tile = ({ name, dimension, residents, type }) => {
  const classes = useStyles()
  const [elevation, setElevation] = useState(2)

  return (
    <Grid 
      item
    >
      <Paper
        className={classes.tile}
        elevation={elevation}
        onMouseEnter={() => setElevation(6)}
        onMouseLeave={() => setElevation(2)}
        style={{opacity: elevation === 2 ? '0.7' : '0.9'}}
      >
        <Typography variant='h6' className={classes.text}>{name}</Typography>
        <Typography variant='subtitle2' className={classes.text}>
          {!dimension.includes('Dimension') && 'Dimension: '}
          {dimension}</Typography>
        <Typography variant='body2' className={classes.text}>Residents: {residents.length}</Typography>
        <Typography variant='body2' className={classes.text}>Type: {type}</Typography>
      </Paper>
    </Grid>
  )
}
export default Tile