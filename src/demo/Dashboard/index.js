import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const widgets = {
  info: [
    {
      type: 1,
      label: 'String',
      keyValue: '7fe2d916-bd38-4f60-95d1-6f08d4ad1360',
      defaultValue: 'default value',
      color: 'primary',
    },
    {
      type: 2,
      label: 'Toggle',
      keyValue: '7fe2d916-bd38-4f60-95d1-6f08d4ad1361',
      defaultValue: true,
      color: 'secondary',
    },
    {
      type: 3,
      label: 'Upload',
      keyValue: '7fe2d916-bd38-4f60-95d1-6f08d4ad1362',
    },
  ],
  layout: [
    {
      w: 2,
      h: 1,
      x: 3,
      y: 0,
      i: '7fe2d916-bd38-4f60-95d1-6f08d4ad1360',
      minW: 2,
      static: false,
      isDraggable: true,
      isResizable: false,
    },
    {
      w: 2,
      h: 1,
      x: 2,
      y: 0,
      i: '7fe2d916-bd38-4f60-95d1-6f08d4ad1361',
      minW: 2,
      static: false,
      isDraggable: true,
      isResizable: true,
    },
    {
      w: 3,
      h: 3,
      x: 2,
      y: 0,
      i: '7fe2d916-bd38-4f60-95d1-6f08d4ad1362',
      minW: 3,
      minH: 3,
      static: false,
      isDraggable: true,
      isResizable: true,
    },
  ],
};

const Dashboard = () => (
  <div>
    Dashboard Temp
    <div style={{ width: '100%', height: '100%', padding: 20 }}>
      <DashboardLayout
        defaultWidgets={widgets}
        onLayoutChange={() => {}}
      />
    </div>
  </div>
);

export default Dashboard;
