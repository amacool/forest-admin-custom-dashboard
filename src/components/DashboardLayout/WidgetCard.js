import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    '&.initial': {
      backgroundColor: 'rgb(247,248,249)',
      '& > div:first-child': {
        color: 'rgb(163,173,187)'
      },
      '& > div:last-child': {
        color: 'rgb(65,85,116)'
      },
    },
    '&.success': {
      backgroundColor: '#54bd7e',
      '& > div:first-child': {
        color: 'white'
      },
      '& > div:last-child': {
        color: 'white'
      },
    }
  },
  cardTop: {
    padding: '10px 22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,.05)',

    '& > *': {
      width: 50,
      height: 50
    }
  },
  cardBottom: {
    padding: '15px 22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    textAlign: 'center',

    '& > strong': {
      marginBottom: 10
    },
    '& > p': {
      margin: 0
    }
  }
}));

export default function WidgetCard({
  title,
  description,
  icon,
  color,
  handleClick
}) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${color}`} onClick={handleClick}>
      <div className={classes.cardTop}>{icon}</div>
      <div className={classes.cardBottom}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}

WidgetCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

WidgetCard.defaultProps = {
  color: 'initial',
  handleClick: () => {}
};