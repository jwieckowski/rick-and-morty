import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { fetchMoreSource } from '../../data/actions/source'

import Tile from './Tile'
import background from '../../assets/background3.jpg'

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
        name={res.name}
        gender={res.gender}
        image={res.image}
      />
    )
  })
}

const fetchMore = (dispatch, link) => {
  dispatch(fetchMoreSource(link))
}

const Characters = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { characters } = useSelector((state) => state.source)

  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Characters</Typography>
      </Grid>
      <Grid 
        container
        className={classes.content}
      >
        {createTiles(characters)}
        { characters.info && characters.info.next !== null && 
          <Grid className={classes.label}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => fetchMore(dispatch, characters.info.next)}
            >
              Show more
            </Button>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}
export default Characters