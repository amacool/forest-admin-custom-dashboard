import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const successColor = '#54bd7e';
const primaryColor = '#f0734f';
const defaultColor = 'white';

const useStyles = makeStyles(() => ({
  root: {
    padding: '4px 24px',
    textTransform: 'none',
    '&:hover': {
      filter: 'brightness(0.95)'
    },
  },
  default: {
    backgroundColor: defaultColor,
    color: '#415574',
    border: `1px solid #c8ced7`,
    '&:hover': {
      backgroundColor: defaultColor,
    },
  },
  primary: {
    backgroundColor: primaryColor,
    color: 'white',
    border: `1px solid rgb(191, 78, 45)`,
    '&:hover': {
      backgroundColor: primaryColor,
    },
  },
  success: {
    backgroundColor: successColor,
    color: 'white',
    border: `1px solid #1eab62`,
    '&:hover': {
      backgroundColor: successColor,
    },
  }
}));

export default function TitleBar({
  text, color, onAction
}) {
  const classes = useStyles();
  let className = classes.primary;
  if (color === 'success') {
    className = classes.success;
  } else if (color === 'default') {
    className = classes.default;
  }

  return (
    <Button color="primary" className={`${className} ${classes.root}`} onClick={onAction}>{text}</Button>
  )
};

TitleBar.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onAction: PropTypes.func,
};

TitleBar.defaultProps = {
  color: 'default',
  onAction: () => {},
};
