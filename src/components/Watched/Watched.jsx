import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Item from './Item'

import { fetchMoreSource } from '../../data/actions/source'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
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

const fetchMore = (dispatch, link) => {
  dispatch(fetchMoreSource(link))
}

const createTiles = (episodes) => {
  if (episodes === undefined) return
  return episodes.map(e => {
    return (
      <Item
        key={e.id}
        episode={e.episode}
        name={e.name}
        air_date={e.air_date}
      />
    )
  })
}

const Episodes = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { episodes } = useSelector((state) => state.source)
  
  return (
    <Grid className={classes.root}>
      <Grid className={classes.label}>
        <Typography variant='h5'>Episodes</Typography>
      </Grid>
      <List
        className={classes.content}
      >
        {createTiles(episodes.results)}
        { episodes.info && episodes.info.next !== null && 
          <ListItem className={classes.label}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => fetchMore(dispatch, episodes.info.next)}
            >
              Show more
            </Button>
          </ListItem>
        }
      </List>
    </Grid>
  )
}
export default Episodes