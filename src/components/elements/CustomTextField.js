import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { OutlinedInput, InputLabel, FormControl } from '@material-ui/core';

/**
 * @params
 * className: className of TextField component
 * width: width of TextField, default value is 200.
 * height: height of TextField, default value is 36.
 * label: label of TextField
 * labelWidth: labelWidth on TextField outline, default value is 0.
 * endAdornment: endAdornment of TextField input
 * type: type of TextField input
 * placeholder: placeholder of TextField input
 * defaultValue: defaultValue of TextField input
 * multiline: allows multiline TextField input, default value is false.
 * handleChange: handle change value of TextField input
 */

const customMuiTheme = (props) => createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        '& .Mui-focused fieldset': {
          border: '1px solid #0484FE !important',
          boxShadow: '0 3px 3px -1px rgba(10,22,70,.1), 0 0 1px 0 rgba(10,22,70,.06)',
        },
      },
    },
    MuiInputBase: {
      root: {
        background: '#FAFBFB',
        width: props.width,
        height: props.height,

        '&:hover fieldset': {
          border: '1px solid #C8CED7 !important',
        },
      },
    },
  },
});

const CustomTextField = (props) => {
  const {
    className,
    width,
    height,
    label,
    labelWidth,
    endAdornment,
    type,
    placeholder,
    defaultValue,
    multiline,
    handleChange,
  } = props;

  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <ThemeProvider theme={customMuiTheme({ width, height })}>
      <FormControl variant="outlined">
        {label && <InputLabel htmlFor="custom-outlined-text-field">{label}</InputLabel>}
        <OutlinedInput
          id="custom-outlined-text-field"
          className={className}
          labelWidth={labelWidth}
          type={type}
          endAdornment={endAdornment}
          placeholder={placeholder}
          defaultValue={defaultValue}
          multiline={multiline}
          onChange={onChange}
        />
      </FormControl>
    </ThemeProvider>
  );
};

CustomTextField.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  label: PropTypes.string,
  labelWidth: PropTypes.number,
  endAdornment: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  multiline: PropTypes.bool,
  handleChange: PropTypes.func,
};

CustomTextField.defaultProps = {
  className: 'custom-text-field',
  width: 200,
  height: 36,
  label: '',
  labelWidth: 0,
  endAdornment: null,
  type: 'text',
  placeholder: '',
  defaultValue: 'Please input',
  multiline: false,
  handleChange: () => {},
};

export default CustomTextField;
