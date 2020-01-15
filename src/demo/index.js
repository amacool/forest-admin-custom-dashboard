import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import CustomElements from './CustomElements';
import Dashboard from './Dashboard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      top: '65px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    height: 'calc(100% - 210px)',
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing(3),
    '& > .scrollbar-container': {
      padding: theme.spacing(1.875),
    },
  },
}));

const list = [
  {
    label: 'NavBar',
    url: '/nav',
  },
  {
    label: 'Custom Elements',
    url: '/custom-elements',
  },
  {
    label: 'Dashboard',
    url: '/dashboard',
  },
];

const DemoBoard = ({ history }) => {
  const classes = useStyles();
  const [path, setPath] = useState(history.location.pathname);

  history.listen((location) => {
    setPath(location.pathname);
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Demo Board
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <SideBar list={list} path={path} />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Switch>
          <Route path="/demo/nav" component={NavBar} />
          <Route path="/demo/custom-elements" component={CustomElements} />
          <Route path="/demo/dashboard" component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
};

DemoBoard.propTypes = {
  history: PropTypes.object.isRequired,
};
export default DemoBoard;
