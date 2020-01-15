import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  propCompWrapper: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    '& > label': {
      margin: '8px 10px 0 0',
      width: '30%',
      fontWeight: 600,
      cursor: 'pointer',
    },
    '& > span': {
      marginLeft: '-12px',
    },
  },
}));

const ToggleComponent = ({
  label,
  keyValue,
  defaultValue,
  onChange,
  color,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={classes.propCompWrapper}>
      <label htmlFor={keyValue}>{label}</label>
      <Switch
        id={keyValue}
        checked={value}
        color={color}
        onChange={(e) => {
          setValue(e.target.checked);
          onChange(e.target.checked);
        }}
      />
    </div>
  );
};

ToggleComponent.propTypes = {
  label: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};

ToggleComponent.defaultProps = {
  color: 'primary',
};

export default ToggleComponent;
