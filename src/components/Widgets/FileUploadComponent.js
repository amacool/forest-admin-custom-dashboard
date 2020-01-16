import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
  propCompWrapper: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    '& > label': {
      margin: '3px 10px 0 0',
      width: '30%',
      fontWeight: 600,
    },
    '& > div': {
      width: '70%',
      minHeight: 160,
    },
  },
}));

const FileUploadComponent = ({
  label,
  keyValue,
  defaultValue,
  onChange,
  fileTypes,
}) => {
  const classes = useStyles();
  const handleChange = (files) => {
    onChange(files);
  };

  return (
    <div className={classes.propCompWrapper}>
      <label htmlFor={keyValue}>{label}</label>
      <DropzoneArea
        id={keyValue}
        onChange={handleChange}
        acceptedFiles={fileTypes}
        maxFileSize={5000000}
        initialFiles={defaultValue || []}
        showPreviews={false}
        filesLimit={1}
        dropzoneText="Drag and drop or click"
      />
    </div>
  );
};

FileUploadComponent.propTypes = {
  label: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  fileTypes: PropTypes.array,
};

FileUploadComponent.defaultProps = {
  fileTypes: ['image/*', 'video/*', 'application/*'],
  defaultValue: [],
};

export default FileUploadComponent;
