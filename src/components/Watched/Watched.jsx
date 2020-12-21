import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Item from './Item'

import { loadWatched } from '../../data/actions/watched.js'
import background from '../../assets/background5.png'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundImage: "url(" + background + ")",
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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

const createTiles = (watchedEp) => {
  if (watchedEp === []) return
  return watchedEp.map(e => {
    return (
      <Item
        key={e.id}
        id={e.id}
        episode={e.episode}
        name={e.name}
        air_date={e.air_date}
        watched={e.watched}
      />
    )
  })
}

function compareID(a, b) {
  return a.id - b.id
}

const Watched = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadWatched('/db'))
  }, [])

  const { data } = useSelector((state) => state.watched)
  
  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Watched Episodes</Typography>
      </Grid>
      <List
        className={classes.content}
      >
        {createTiles(data.sort(compareID))}
      </List>
    </Grid>
  )
}
export default Watched