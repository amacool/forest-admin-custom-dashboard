import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import BrushIcon from '@material-ui/icons/Brush';

import IconButton from '@material-ui/core/IconButton';

import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navToolContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: '#333',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    '& > span > svg': {
      width: '20px',
    },
  },
}));


function NavTool() {
  const classes = useStyles();

  return (
    <Grid container alignContent="flex-start" className={classes.navToolContainer}>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <SchoolIcon />
      </IconButton>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <HelpOutlineIcon />
      </IconButton>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <SettingsIcon />
      </IconButton>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <BrushIcon />
      </IconButton>
    </Grid>
  );
}

export default NavTool;
