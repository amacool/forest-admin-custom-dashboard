import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 1,
  },
  bar: {
    backgroundColor: (props) => props.backgroundColor,
    boxShadow: '0 1px 2px rgba(0,0,0,.15)',
  },
  title: {
    flexGrow: 1,
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
  },
  actionButton: {
    backgroundColor: (props) => props.actionButton.backgroundColor,
    color: (props) => props.actionButton.color,
    border: (props) => `1px solid ${props.actionButton.borderColor}`,
    textTransform: 'none',
    padding: '3px 15px',
    '&:hover': {
      backgroundColor: (props) => props.actionButton.hoverBackgroundColor,
    },
  },
}));

export default function TitleBar({
  title, color, backgroundColor, fontSize, showAction, onAction,
}) {
  const props = {
    backgroundColor,
    color,
    fontSize,
    actionButton: {
      backgroundColor: 'rgb(240, 115, 79)',
      hoverBackgroundColor: 'rgb(203, 102, 77)',
      color: 'white',
      borderColor: 'rgb(191, 78, 45)',
    },
  };
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {showAction && (
            <Button color="primary" className={classes.actionButton} onClick={onAction}>Add a new widget</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.number,
  showAction: PropTypes.bool,
  onAction: PropTypes.func,
};

TitleBar.defaultProps = {
  color: 'white',
  backgroundColor: 'rgb(63, 81, 181)',
  fontSize: 20,
  showAction: false,
  onAction: () => {},
};
