import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CharacterTile from '../Characters/Tile'
import LocationTile from '../Locations/Tile'
import EpisodeTile from '../Episodes/Tile'

import { loadFavorites } from '../../data/actions/favorites.js'
import background from '../../assets/background7.jpg'

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
  if (data === []) return
  return data.map(d => {
    let content
    if (d.content.type === 'Character') {
      content = (
        <CharacterTile
        key={d._id}
        id={d.content.id}
        name={d.content.name}
        gender={d.content.gender}
        image={d.content.image}
      />
      )
    } else if (d.content.type === 'Location') {
      content = (
        <LocationTile
          key={d._id}
          id={d.content.id}
          name={d.content.name}
          dimension={d.content.dimension}
          residents={d.content.residents}
          type={d.content.type}
        />
      )
    } else if (d.content.type === 'Episode') {
      content = (
          <EpisodeTile
          key={d._id}
          id={d.content.id}
          episode={d.content.episode}
          name={d.content.name}
          air_date={d.content.air_date}
        />
      )
    }
    return content
  })
}


const Favorites = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadFavorites('/favorites'))
  }, [])

  const { data } = useSelector((state) => state.favorites)
  console.log(data)

  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Favorites</Typography>
      </Grid>
      <Grid 
        container
        className={classes.content}
      >
        {createTiles(data)}
      </Grid>
    </Grid>
  )
}
export default Favorites