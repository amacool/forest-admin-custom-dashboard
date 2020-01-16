import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  propCompWrapper: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    '& > label': {
      margin: '5px 10px 0 0',
      width: '30%',
      fontWeight: 600,
      cursor: 'pointer',
    },
    '& > div': {
      width: '70%',
      '& > input': {
        paddingLeft: 5,
      },
    },
  },
}));

const StringComponent = ({
  label,
  keyValue,
  defaultValue,
  color,
  onChange,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={classes.propCompWrapper}>
      <label htmlFor={keyValue}>{label}</label>
      <Input
        id={keyValue}
        value={value}
        inputProps={{ 'aria-label': 'description' }}
        color={color}
        onMouseDown={(e) => e.stopPropagation()}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

StringComponent.propTypes = {
  label: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

StringComponent.defaultProps = {
  color: 'primary',
};

export default StringComponent;
