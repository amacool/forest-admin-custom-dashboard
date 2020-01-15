import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import {
  Typography, Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { navBarLink, urlLabel } from '../../utils/const';


const useStyles = makeStyles(() => ({
  navItemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#333',
    cursor: 'pointer',
    '&:hover': {
      color: '#54bd7e',
      fontWeight: 'bolder',
    },
  },
  currentPath: {
    color: '#54bd7e',
  },
  link: {
    textDecoration: 'none',
  },
  Icon: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
}));


function NavItem({ path }) {
  const classes = useStyles();

  return (
    <Grid container alignContent="flex-start" className={classes.navItemContainer}>
      {
        navBarLink.map((navItem) => (
          <Grid
            key={navItem.link}
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            sm={2}
          >
            <IconButton
              className={
                urlLabel[path] === navItem.label ? classes.Icon : ''
              }
              edge="start"
              aria-label="menu"
            >
              {navItem.icon}
            </IconButton>
            <NavLink className={classes.link} to={navItem.link}>
              <Typography
                className={
                  clsx((urlLabel[path] === navItem.label ? classes.currentPath : ''), classes.text)
                }
                variant="subtitle1"
              >
                {navItem.label}
              </Typography>
            </NavLink>
          </Grid>
        ))
      }
    </Grid>
  );
}
NavItem.propTypes = {
  path: PropTypes.string.isRequired,
};

export default NavItem;
