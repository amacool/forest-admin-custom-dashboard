import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const borderColorTextFieldActive = '#0484fe';
const borderColorTextField = '#c8ced7';

const useStyles = makeStyles(() => ({
  root: {
    '& > label': {
      color: '#415574',
      fontSize: 14,
    },
  },
  customTextField: {
    '& > div': {
      borderRadius: 0,
      '& > input': {
        padding: 8,
        borderColor: borderColorTextField,
        backgroundColor: '#fafbfb',
        '&:focus': {
          borderColor: borderColorTextFieldActive,
          boxShadow: '0 3px 3px -1px rgba(10,22,70,.1), 0 0 1px 0 rgba(10,22,70,.06)',
        },
      },
    },
  },
}));

export default function CustomTextField({
  id,
  value,
  onChange,
  label,
  placeholder,
}) {
  const classes = useStyles();
  const [val, setVal] = React.useState('');

  React.useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div className={classes.root}>
      {label && <label htmlFor={id}>{label}</label>}
      <TextField
        id={id}
        className={classes.customTextField}
        value={val}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: false,
        }}
      />
    </div>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomTextField.defaultProps = {
  label: '',
  placeholder: '',
};
