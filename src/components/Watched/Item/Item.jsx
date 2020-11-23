import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'

const useStyles = makeStyles(theme => ({
  item: {
    width: '70%',
    margin: 'auto'
  },
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    position: 'relative',
    border: '2px solid black',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  number: {
    width: '50px',
    height: '50px',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  text: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2)
  },
  name: {
    width: '100%',
    borderBottom: '1px solid grey'
  },
  date: {
    width: '100%',
    textAlign: 'end'
  },
  icon: {
    position: 'absolute',
    top: -5,
    right: 0
  }
}))


const Item = ({episode, name, air_date}) => {
  const classes = useStyles()
  const [elevation, setElevation] = useState(2)

  return (
    <ListItem
        className={classes.item}
      >
        <Paper
          className={classes.paper}
          elevation={elevation}
          onMouseEnter={() => setElevation(5)}
          onMouseLeave={() => setElevation(2)}
        >
          <Paper className={classes.number} elevation={6}>
            {episode}
          </Paper>
          <Grid className={classes.text}>
            <Grid className={classes.name}>
                <Typography variant='h4'>{name}</Typography>
            </Grid>
            <Grid className={classes.date}>
                {air_date}
            </Grid>
          </Grid>
          <IconButton
            color="primary"
            aria-label="episode checkbox"
            className={classes.icon}
          >
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </Paper>
      </ListItem>
  )
}
export default Item