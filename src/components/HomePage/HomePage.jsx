import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import TabItem from '../Dashboard/TabItem'
import background from '../../assets/background.jpg'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: "url(" + background + ")",
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  tabs: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '400px'
  }
})

const createTabs = (data) => {
  const keys = Object.keys(data)
  return keys.map(key => {
    return (
      <TabItem
        key={key}
        text={key}
        link={data[key]}
      />
    )
  })
}

const HomePage = ({ data }) => {
  const classes = useStyles()
  
  return (
    <Grid
      className={classes.root}
    >
      <List className={classes.tabs}>
        {createTabs(data)}
      </List>
    </Grid>
  )
}
export default HomePage