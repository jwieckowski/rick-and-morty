import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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

const CharacterDetails = () => {
  const classes = useStyles()

  const { data } = useSelector((state) => state.source)

  return (
    <Grid className={classes.root}>
      a
    </Grid>
  )
}
export default CharacterDetails