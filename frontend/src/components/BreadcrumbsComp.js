import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    margin: theme.spacing(7),
  },

  link: {
    display: 'flex',
    textDecoration: 'none',
    color: "#1565c0",

    "&:hover": {
      textDecoration: 'none',
      borderBottom: "2px solid #1565c0",
      marginBottom: "-2px",
    },
    "&:action": {
      color: "#1565c0",
    }
  },
  
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));



export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
            <Link color="primary" to="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
              Material-UI
            </Link>

            <Link color="primary" to="/list" className={classes.link}>
              <WhatshotIcon className={classes.icon} />
              Core
            </Link>

            <Link color="primary" to="/print" className={classes.link}>
              <GrainIcon className={classes.icon} />
              Breadcrumb
            </Link>
          </Breadcrumbs>
        </Container>  
    </>
  );
}