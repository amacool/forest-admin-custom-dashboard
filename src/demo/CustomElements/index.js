import React from 'react';
import CustomMenu from '../../components/elements/CustomMenu';
import CustomRichTextEditor from '../../components/elements/CustomRichTextEditor';
import CustomTextAreaAutoSize from '../../components/elements/CustomTextAreaAutoSize';
import CustomTextField from '../../components/elements/CustomTextField';
import CustomLink from '../../components/elements/CustomLink';

import './index.scss';

const CustomElements = () => (
  <div className="custom-elements">
    <div className="custom-elements-item">
      <div className="custom-elements-item-content">
        <CustomMenu className="custom-menu" />
      </div>
      <div className="custom-elements-item-description">
        * className: className
        <br />
        * width: Menu width
        <br />
        * height: Menu height
        <br />
        * backgroundColor: Menu backgroundColor
        <br />
        * button: Menu Button content
        <br />
        * items: MenuItems Array
        <br />
        * handleMenuItemClick: handle MenuItem click event - return item.key
        <br />
      </div>
    </div>
    <div className="custom-elements-item">
      <div className="custom-elements-item-content">
        <CustomRichTextEditor />
      </div>
      <div className="custom-elements-item-description">
        * width: Rich Text Editor width
        <br />
        * backgroundColor: Rich Text Editor backgroundColor
        <br />
        * controls: Rich Text Editor toolbar controls array
        <br />
        * handleSave: handle Save button click
        <br />
        * handleChange: handle Editor content change
        <br />
      </div>
    </div>
    <div className="custom-elements-item">
      <div className="custom-elements-item-content">
        <CustomTextAreaAutoSize />
      </div>
      <div className="custom-elements-item-description">
        * className: className of textarea component
        <br />
        * rowsMin: minValue of rows length
        <br />
        * rowsMax: maxValue of rows length
        <br />
        * placeholder: placeholder for textarea
        <br />
        * defaultValue: defaultValue for textarea
        <br />
        * handleChange: handle change value of textarea
        <br />
      </div>
    </div>
    <div className="custom-elements-item">
      <div className="custom-elements-item-content">
        <CustomTextField />
      </div>
      <div className="custom-elements-item-description">
        * className: className of TextField component
        <br />
        * width: width of TextField, default value is 200.
        <br />
        * height: height of TextField, default value is 36.
        <br />
        * label: label of TextField
        <br />
        * labelWidth: labelWidth on TextField outline, default value is 0.
        <br />
        * endAdornment: endAdornment of TextField input
        <br />
        * type: type of TextField input
        <br />
        * placeholder: placeholder of TextField input
        <br />
        * defaultValue: defaultValue of TextField input
        <br />
        * multiline: allows multiline TextField input, default value is false.
        <br />
        * handleChange: handle change value of TextField input
        <br />
      </div>
    </div>
    <div className="custom-elements-item">
      <div className="custom-elements-item-content">
        <CustomLink content="Custom url link" />
      </div>
      <div className="custom-elements-item-description">
        * className: className
        <br />
        * href: url link
        <br />
        * content: content of Link
        <br />
        * color: color of Link: default, error, inherit, primary, secondary, textPrimary, textSecondary
        <br />
        * underline: underline setting of Link default value is hover
        <br />
        * variant: applies the theme typography styles.
        <br />
      </div>
    </div>
  </div>
);
export default CustomElements;
