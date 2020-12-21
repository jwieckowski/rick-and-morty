import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { addFavorite, deleteFavorite } from '../../../data/actions/favorites'

const useStyles = makeStyles(theme => ({
  tile: {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  text: {
    width: '80%',
    textAlign: 'center'
  },
  favorite: {
    position: 'absolute',
    top: 10,
    left: 20
  },
  favoriteIcon: {
    fontSize: '30px',
    color: '#E33333'
  }
}))

const handleClick = (e, dispatch, body, favorites) => {
  e.preventDefault()
  body.tileType = 'Location'
  favorites.includes(body.id)
    ? dispatch(deleteFavorite(body))
    : dispatch(addFavorite(body))
}

const Tile = ({ id, name, dimension, residents, type }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [elevation, setElevation] = useState(2)

  const { data } = useSelector((state) => state.favorites)
  const favorites = data.map(d => d.content.tileType === 'Location' && d.content.id)

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
        <Grid
          className={classes.favorite}
          onClick={(e) => handleClick(e, dispatch, { id, name, dimension, residents, type }, favorites)}
        >
          {
            favorites.includes(id)
              ? <FavoriteIcon className={classes.favoriteIcon} />
              : <FavoriteBorderIcon className={classes.favoriteIcon} />
          }
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Tile