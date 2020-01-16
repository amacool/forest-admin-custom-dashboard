import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
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
}));

export default function TitleBar({
  title, color, backgroundColor, fontSize, showAction, onAction,
}) {
  const props = {
    backgroundColor,
    color,
    fontSize
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
            <CustomButton text="Add a new widget" color="primary" onAction={onAction} />
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
