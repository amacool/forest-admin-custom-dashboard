import React from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@material-ui/core';

/**
 * @params
 * className: className of textarea component
 * rowsMin: minValue of rows length
 * rowsMax: maxValue of rows length
 * placeholder: placeholder for textarea
 * defaultValue: defaultValue for textarea
 * handleChange: handle change value of textarea
 */

const CustomTextAreaAutoSize = (props) => {
  const {
    className, rowsMin, rowsMax, placeholder, defaultValue, handleChange,
  } = props;

  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <TextareaAutosize
      className={className}
      rowsMin={rowsMin}
      rowsMax={rowsMax}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

CustomTextAreaAutoSize.propTypes = {
  className: PropTypes.string,
  rowsMin: PropTypes.number,
  rowsMax: PropTypes.number,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
};

CustomTextAreaAutoSize.defaultProps = {
  className: 'custom-text-area-auto-size',
  rowsMin: 3,
  rowsMax: null,
  placeholder: '',
  defaultValue: 'Please input',
  handleChange: () => {},
};

export default CustomTextAreaAutoSize;
