import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { fetchMoreSource } from '../../data/actions/source'
import { loadFavorites } from '../../data/actions/favorites'

import Tile from './Tile'
import background from '../../assets/background2.jpg'

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
    alignItems: 'center'
  },
  content: {
    overflow: 'auto',
    width: '100%',
    height: '95%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: theme.spacing(3)
  }
}))

const createTiles = (data) => {
  if (data === undefined || !data.results) return
  return data.results.map(res => {
    return (
      <Tile
        key={res.id}
        id={res.id}
        episode={res.episode}
        name={res.name}
        air_date={res.air_date}
      />
    )
  })
}

const fetchMore = (dispatch, link) => {
  dispatch(fetchMoreSource(link))
}

const Episodes = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { episodes } = useSelector((state) => state.source)

  useEffect(() => {
    dispatch(loadFavorites('/favorites'))
  }, [])

  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Episodes</Typography>
      </Grid>
      <Grid 
        container
        className={classes.content}
      >
        {createTiles(episodes)}
        { episodes.info && episodes.info.next !== null && 
          <Grid className={classes.label}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => fetchMore(dispatch, episodes.info.next)}
            >
              Show more
            </Button>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}
export default Episodes