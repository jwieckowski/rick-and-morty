import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  tile: {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    position: 'relative'
  },
  number: {
    width: '50px',
    height: '50px',
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingTop: theme.spacing(1),
    width: '100%'
  },
  name: {
    textAlign: 'center',
    width: '100%'
  },
  date: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTop: '1px solid gray',
    width: '100%',
    textAlign: 'end'
  }
}))

const Tile = ({ episode, name, air_date }) => {
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
        <Paper className={classes.number} elevation={6}>
          {episode}
        </Paper>
        <Grid className={classes.text}>
          <Grid className={classes.name}>
            <Typography variant='h6'>{name}</Typography>
          </Grid>
          <Grid className={classes.date}>
            {air_date}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Tile