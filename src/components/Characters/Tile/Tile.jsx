import React, { useState } from 'react'
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
  iconMen: {
    fontSize: '30px',
    color: '#18B3EC'
  },
  iconWomen: {
    fontSize: '30px',
    color: '#f8b9d4'
  }
}))

const showGender = (gender, classes) => {
  const icons = {
    'Male':  <FontAwesomeIcon icon={faMars} className={classes.iconMen}/>,
    'Female':  <FontAwesomeIcon icon={faVenus} className={classes.iconWomen}/>
  }
  return icons[gender]
}

const Tile = ({ name, gender, image }) => {
  const classes = useStyles()
  const [elevation, setElevation] = useState(2)
  
  return (
    <Grid 
      item
      className={classes.item}
    >
      <Link
        to='/details'
        className={classes.link}
      >
        <Card
          className={classes.tile}
          elevation={elevation}
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(2)}
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
      </Link>
    </Grid>
  )
}
export default Tile