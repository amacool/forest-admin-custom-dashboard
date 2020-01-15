import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar, Toolbar, Typography, Grid,
} from '@material-ui/core';

import NavItem from './NavItem';
import NavTool from './NavTool';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'white',
  },
  logoText: {
    color: '#333',
    fontSize: '24px',
  },
  text: {
    color: '#333',
  },
}));


function NavBar({ path }) {
  const classes = useStyles();

  return (
    <Grid container alignContent="flex-start">
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Grid item sm={2}>
            <Typography className={classes.logoText} variant="subtitle1">
              MarketReach GUI
            </Typography>
          </Grid>
          <Grid item sm={7}>
            <NavItem path={path} />
          </Grid>
          <Grid item sm={2}>
            <NavTool />
          </Grid>
          <Grid item sm={1}>
            <Typography className={classes.text} variant="subtitle1">
              Client Section
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

NavBar.propTypes = {
  path: PropTypes.string,
};

NavBar.defaultProps = {
  path: '/',
};

export default NavBar;
