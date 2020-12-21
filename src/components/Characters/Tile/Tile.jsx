import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus } from "@fortawesome/free-solid-svg-icons"
import { faMars } from "@fortawesome/free-solid-svg-icons"
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { setCharacter } from '../../../data/actions/source'
import { addFavorite, deleteFavorite } from '../../../data/actions/favorites'

const useStyles = makeStyles(theme => ({
  item: {
    position: 'relative'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  tile: {
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  avatar: {
    height: '120px',
    width: '120px'
  },
  avatarComponent: {
    marginRight: '0px'
  },
  gender: {
    position: 'absolute',
    top: 10,
    right: 20
  },
  favorite: {
    position: 'absolute',
    top: 10,
    left: 20
  },
  iconMen: {
    fontSize: '30px',
    color: '#18B3EC'
  },
  iconWomen: {
    fontSize: '30px',
    color: '#f8b9d4'
  },
  favoriteIcon: {
    fontSize: '30px',
    color: '#E33333'
  }
}))

const showGender = (gender, classes) => {
  const icons = {
    'Male':  <FontAwesomeIcon icon={faMars} className={classes.iconMen}/>,
    'Female':  <FontAwesomeIcon icon={faVenus} className={classes.iconWomen}/>
  }
  return icons[gender]
}

const handleClick = (e, dispatch, body, favorites) => {
  e.preventDefault()
  body.type = 'Character'
  favorites.includes(body.id)
    ? dispatch(deleteFavorite(body))
    : dispatch(addFavorite(body))
}

const setCurrentCharacterData = (dispatch, data, id) => {
  dispatch(setCharacter(data.filter(d => d.id === id)[0]))
}

const Tile = ({ id, name, gender, image }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [elevation, setElevation] = useState(2)
  
  const { characters } = useSelector((state) => state.source)
  const { data } = useSelector((state) => state.favorites)

  const favorites = data.map(d => d.type === 'Character' && d.id)

  return (
    <Grid 
      item
      className={classes.item}
    >
      <Link
        to='/details'
        className={classes.link}
        onClick={() => setCurrentCharacterData(dispatch, characters.results, id)}
      >
        <Card
          className={classes.tile}
          elevation={elevation}
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(2)}
          style={{opacity: elevation === 2 ? '0.7' : '0.9'}}
        >
          <CardHeader
            classes={{
              avatar: classes.avatarComponent
            }}
            avatar={
              <Avatar
                alt={name}
                className={classes.avatar}
                src={image}
              />
            }
          />
          <CardActions>
            <Typography variant='h6'>
              {name}
            </Typography>
          </CardActions>
        </Card>
        <Grid className={classes.gender}>
          {showGender(gender, classes)}
        </Grid>
        <Grid
          className={classes.favorite}
          onClick={(e) => handleClick(e, dispatch, { id, name, gender, image }, favorites)}
        >
          {
            favorites.includes(id)
              ? <FavoriteIcon className={classes.favoriteIcon} />
              : <FavoriteBorderIcon className={classes.favoriteIcon} />
          }
        </Grid>
      </Link>
    </Grid>
  )
}
export default Tile