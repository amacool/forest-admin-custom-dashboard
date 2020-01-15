import React from 'react';
import PropTypes from 'prop-types';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

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
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Link: {
    textDecoration: 'none',
  },
  listButton: {
    textDecoration: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
}));

function SideBar({ list, path }) {
  const classes = useStyles();
  console.log('sub', path);
  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {list.map((listItem) => (
          <NavLink className={classes.Link} to={`/demo${listItem.url}`} key={listItem.label}>
            <ListItem button className={`/demo${listItem.url}` === path ? classes.listButton : ''}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={listItem.label} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
}

SideBar.propTypes = {
  list: PropTypes.array,
  path: PropTypes.string,
};

SideBar.defaultProps = {
  list: [],
  path: '/demo',
};

export default SideBar;
