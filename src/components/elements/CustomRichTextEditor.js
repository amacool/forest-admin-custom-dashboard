import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { richTextBoxControls } from '../../utils/const';

/**
 * @params
 * className: className
 * width: Rich Text Editor width
 * backgroundColor: Rich Text Editor backgroundColor
 * controls: Rich Text Editor toolbar controls array
 * handleSave: handle Save button click
 * handleChange: handle Editor content change
 */

const CustomMuiTheme = (props) => createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        padding: 6,
      },
    },
    MUIRichTextEditor: {
      root: {
        width: props.width,
        background: props.backgroundColor,
        border: '1px solid gray',
        borderRadius: 5,
      },
      toolbar: {
        paddingBottom: 4,
        paddingLeft: 10,
        borderBottom: '1px solid gray',
      },
      editorContainer: {
        marginTop: 0,
        padding: 10,
        boxSizing: 'border-box',
      },
    },
  },
});

const CustomRichTextEditor = (props) => {
  const {
    className, width, backgroundColor, controls, handleSave, handleChange,
  } = props;

  const onSave = (data) => {
    handleSave(data);
  };

  const onChange = (state) => {
    const { currentContent } = state._immutable;
    handleChange(currentContent.getPlainText());
  };

  return (
    <ThemeProvider theme={CustomMuiTheme({ width, backgroundColor })}>
      <div className={className}>
        <MUIRichTextEditor
          label="Start typing..."
          inlineToolbar
          controls={controls}
          onSave={onSave}
          onChange={onChange}
        />
      </div>
    </ThemeProvider>
  );
};

CustomRichTextEditor.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  controls: PropTypes.array,
  handleSave: PropTypes.func,
  handleChange: PropTypes.func,
};

CustomRichTextEditor.defaultProps = {
  className: null,
  width: 600,
  backgroundColor: 'white',
  controls: richTextBoxControls,
  handleSave: () => {},
  handleChange: () => {},
};

export default CustomRichTextEditor;
