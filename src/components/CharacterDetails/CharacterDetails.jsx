import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Paper } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

import { fetchSource } from '../../data/actions/source'

import Spinner from '../UI/Spinner'
import Page404 from '../UI/Page404'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  name: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: '300px',
    height: '300px'
  },
  info: {
    width: '100%',
    height: '50%',
    display: 'flex'
  },
  details: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  text: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    width: '35%'
  },
  infoText: {
    width: '65%',
    textAlign: 'end'
  },
  episodes: {
    height: '80%',
    width: '80%'
  },
  episodeText: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    minWidth: '350px',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  episode: {
    margin: 'auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(1),
    borderBottom: '1px black solid'
  },
  number: {
    width: '20%'
  },
  title: {
    width: '50%'
  },
  date: {
    width: '30%',
    textAlign: 'end'
  }
}))

const CharacterDetails = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { characterData, episodes, loading, loadError } = useSelector((state) => state.source)
  
  useEffect(() => {
    if (episodes.info || episodes.length || episodes.id) return
    const numbers = characterData.episode.map(e => {
      const elements = e.split('/')
      return parseInt(elements[elements.length-1])
    })
    dispatch(fetchSource(`https://rickandmortyapi.com/api/episode/${numbers}`))
  }, [])

  let episodesContent = <Spinner/>

  if (!loading) {
    if (!loadError) {
      episodesContent = (
        <Grid container maxwidth='xs' className={classes.episodes}>
          <Paper className={classes.paper} elevation={4}>
            <Typography variant='h5' className={classes.episodeText}>Episodes</Typography>
            {episodes.length && episodes.map(e => {
              return (
                <Grid className={classes.episode} key={e.id}>
                  <Typography className={classes.number}>{e.episode}</Typography>
                  <Typography className={classes.title}>{e.name}</Typography>
                  <Typography className={classes.date}>{e.air_date}</Typography>
                </Grid>
              )
            })}
            {episodes.id && 
              <Grid className={classes.episode} key={episodes.id}>
                <Typography className={classes.number}>{episodes.episode}</Typography>
                <Typography className={classes.title}>{episodes.name}</Typography>
                <Typography className={classes.date}>{episodes.air_date}</Typography>
              </Grid>
            }
          </Paper>
        </Grid>
      )
    } else {
      episodesContent = <Page404 />
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.image}>
        <Typography variant='h4' className={classes.name}>
          {characterData.name}
        </Typography>
        <Avatar
          className={classes.avatar}
          src={characterData.image}
          alt={characterData.name}
        />
      </Grid>
      <Grid item className={classes.info}>
        <Grid className={classes.details}>
          <Grid className={classes.text}>
            <Typography variant="h6" className={classes.header}>Gender :</Typography>
            <Typography variant="h6" className={classes.infoText} style={{color: characterData.gender === 'Male' ? '#18B3EC' : characterData.gender === 'Female' ? '#f8b9d4' : '#535354'}}>{characterData.gender}</Typography>
          </Grid>
          <Grid className={classes.text}>
            <Typography variant="h6" className={classes.header}>Species :</Typography>
            <Typography variant="h6" className={classes.infoText}>{characterData.species}</Typography>
          </Grid>
          <Grid className={classes.text}>
            <Typography variant="h6" className={classes.header}>Origin :</Typography>
            <Typography variant="h6" className={classes.infoText}>{characterData.origin.name}</Typography>
          </Grid>
          <Grid className={classes.text}>
            <Typography variant="h6" className={classes.header}>Location :</Typography>
            <Typography variant="h6" className={classes.infoText}>{characterData.location.name}</Typography>
          </Grid>
          <Grid className={classes.text}>
            <Typography variant="h6" className={classes.header}>Status :</Typography>
            <Typography variant="h6" className={classes.infoText} style={{color: characterData.status === 'Alive' ? '#2CEF19' : characterData.status === 'Dead' ? '#FF1212' : '#535354'}}>{characterData.status}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.details}>
          {episodesContent}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default CharacterDetails