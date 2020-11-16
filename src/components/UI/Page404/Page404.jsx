import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default function Page404() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      Error occurred...
    </div>
  );
}