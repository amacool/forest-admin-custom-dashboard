import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
// import uuidv4 from 'uuid/v4';
import StringComponent from '../Widgets/StringComponent';
import ToggleComponent from '../Widgets/ToggleComponent';
import FileUploadComponent from '../Widgets/FileUploadComponent';
import TitleBar from '../TitleBar';
import WidgetEditForm from './WidgetEditForm';
import 'react-grid-layout/css/styles.css';
import './index.scss';

const ReactGridLayout = WidthProvider(Responsive);
const rowHeight = 100;
const cols = {
  lg: 12, md: 10, sm: 6, xs: 4, xxs: 2,
};

export default class DashboardLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { layout: [], info: [], formOpened: false };
  }

  componentDidMount() {
    // console.log(this.props.defaultWidgets);
    this.setState({ layout: this.props.defaultWidgets.layout, info: this.props.defaultWidgets.info });
  }

  componentDidUpdate() {
    // if (prevProps.children !== this.props.children) {
    // }
  }

  onLayoutChange = (layout) => {
    // console.log(layout);
    this.props.onLayoutChange(layout);
  }

  renderItem = (item) => {
    if (item.type === 1) {
      return (
        <StringComponent
          label={item.label}
          keyValue={item.keyValue}
          defaultValue={item.defaultValue}
          onChange={() => {}}
        />
      );
    } if (item.type === 2) {
      return (
        <ToggleComponent
          label={item.label}
          keyValue={item.keyValue}
          defaultValue={item.defaultValue}
          onChange={() => {}}
        />
      );
    } if (item.type === 3) {
      return (
        <FileUploadComponent
          label={item.label}
          keyValue={item.keyValue}
          defaultValue={item.defaultValue}
          fileTypes={['image/jpeg', 'image/png', 'image/bmp']}
          onChange={() => {}}
        />
      );
    }
  }

  generateLayout = (items) => _.map(_.range(items), (item, i) => {
    const w = 1;
    const y = 2;
    return {
      x: (i * 2) % cols,
      y: Math.floor(i / 6) * y,
      w,
      h: y,
      i: i.toString(),
    };
  });

  generateDOM = (info, layout) => info.map((item, index) => (
    <div key={item.keyValue} data-grid={layout[index]}>
      <div>
        {this.renderItem(item)}
      </div>
      <SettingsApplicationsIcon className="react-resizable-edit-handle" />
    </div>
  ))

  render() {
    const {
      className, rowHeight, cols, children,
    } = this.props;
    const { layout, info, formOpened } = this.state;

    return (
      <div>
        <TitleBar
          title="Dashboard"
          color="black"
          backgroundColor="white"
          showAction
          onAction={() => this.setState({ formOpened: true })}
        />
        <WidgetEditForm
          open={formOpened}
          isEditMode={true}
          onSave={() => {}}
          onClose={() => this.setState({ formOpened: false })}
        />
        <ReactGridLayout
          layout={(layout && layout.map((item) => item.layout)) || []}
          onLayoutChange={this.onLayoutChange}
          className={className}
          rowHeight={rowHeight}
          cols={cols}
          items={children.length}
          containerPadding={[10, 10]}
          margin={[10, 10]}
          breakpoints={{
            lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
          }}
        >
          {this.generateDOM(info, layout)}
        </ReactGridLayout>
      </div>
    );
  }
}

DashboardLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
  defaultWidgets: PropTypes.object.isRequired,
  className: PropTypes.string,
  rowHeight: PropTypes.number,
  cols: PropTypes.object,
  children: PropTypes.array,
};

DashboardLayout.defaultProps = {
  className: 'grid-layout',
  rowHeight,
  cols,
  children: [],
};
