import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'

import { fetchSource } from '../../data/actions/source'

import HomePage from '../HomePage'
import Characters from '../Characters'
import Locations from '../Locations'
import Episodes from '../Episodes'

import Spinner from '../UI/Spinner'
import Page404 from '../UI/Page404'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'calc(100% - 64px)',
    // backgroundColor: 'blue',
    margin: 0,
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '400px'
  }
})

const switchContent = (path, data) => {
  const content = {
    '/': <HomePage data={data} />,
    '/characters': <Characters />,
    '/locations': <Locations />,
    '/episodes': <Episodes />
  }

  return content[path]
}

const Dashboard = () => {
  const classes = useStyles()
  const location = useLocation()
  const sites = ['/', '/characters', '/locations', '/episodes']

  const dispatch = useDispatch()
  useEffect(() => {
    if(!sites.includes(location.pathname)) return
    location.pathname === '/'
      ? dispatch(fetchSource('https://rickandmortyapi.com/api'))
      : dispatch(fetchSource(`https://rickandmortyapi.com/api${location.pathname.substring(0, location.pathname.length-1)}`))
  }, [])

  const { data, loading, loadError } = useSelector((state) => state.source)

  let content = <Spinner/>

  if (!loading) {
    if (!loadError) {
      content = (
        <Grid container maxwidth='xs' className={classes.root}>
          {switchContent(location.pathname, data)}
        </Grid>
      )
    } else {
      content = <Page404 />
    }
  }

  return (
    <>
      {content}
    </>
  )
}
export default Dashboard