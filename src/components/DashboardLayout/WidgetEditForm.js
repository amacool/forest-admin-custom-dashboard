import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import Switch from '@material-ui/core/Switch';
import TitleBar from '../TitleBar';
import FormTextField from '../FormTextField';
import WidgetCard from './WidgetCard';
import CustomButton from '../CustomButton';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 650,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actionButton: {
  },
  formBody: {
    flex: '1 1 auto',
    padding: theme.spacing(3),
  },
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  stepNumber: {
    width: 40,
    height: 40,
    backgroundColor: '#54bd7e',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: 'white',
    borderRadius: 2,
  },
  stepDesc: {
    display: 'flex',
    flexDirection: 'column',
    '& > p': {
      margin: 0,
      fontSize: 14,
    },
    '& > strong': {
      marginBottom: 6,
      fontSize: 16,
    },
  },
  stepState1: {
    backgroundColor: '#54bd7e'
  },
  stepState2: {
    backgroundColor: 'rgb(65, 85, 116)',
  },
  stepState3: {
    backgroundColor: 'rgb(247, 248, 249)',
    color: 'rgb(163, 173, 187)',
  },
  formRow: {
    marginBottom: theme.spacing(4),
  },
  submitWrapper: {
    backgroundColor: 'white',
    '& > div': {
      justifyContent: 'space-between'
    }
  },
  submitRight: {
    width: 190,
    display: 'flex',
    justifyContent: 'space-between'
  },
  switchWrapper: {
    '& > label': {
      margin: '0',
      color: '#415574',
      display: 'block'
    },
    '& > span': {
      marginTop: -3
    }
  }
}));

const widgets = [
  {
    icon: <TextFieldsIcon/>,
    title: "String Widget",
    description: "Displays a input text widget",
    type: 1,
  },
  {
    icon: <ToggleOffIcon/>,
    title: "Toggle Widget",
    description: "Displays a toggle widget",
    type: 2,
  },
  {
    icon: <CloudUploadIcon/>,
    title: "Upload Widget",
    description: "Displays a file upload widget",
    type: 3,
  }
];

export default function WidgetEditForm({ open, onSave, onClose, onDelete, isEditMode }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [values, setValues] = React.useState({
    name: '',
    description: '',
    type: 0,
    label: '',
    defaultValue: ''
  });
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {
    setValues({
      name: '',
      description: '',
      type: 0,
      label: '',
      defaultValue: ''
    });
    setState({ right: open });
  }, [open]);

  React.useEffect(() => {
    if (values.name && values.description) {
      if (values.type > 0) {
        setStep(3);
      } else {
        setStep(2);
      }
    } else {
      setStep(1);
    }
  }, [values]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeType = (type) => {
    let defaultValue = values.defaultValue;
    if (type === 2 && typeof defaultValue !== 'boolean') {
      defaultValue = false;
    } else if (type !== 2 && typeof defaultValue !== 'string') {
      defaultValue = '';
    }
    setValues({ ...values, defaultValue, type });
  }

  const handleSave = () => {
    if (!values.name || !values.description || !values.type || !values.label) {
      return;
    }
    onSave(values);
  }

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
    if (!open) {
      onClose();
    }
  };

  const showStep = (step, curStep, title, desc) => {
    let stateClass = classes.stepState1;
    if (step < curStep) {
      stateClass = classes.stepState2;
    } else if (step > curStep) {
      stateClass = classes.stepState3;
    }
    return (
      <div className={classes.stepWrapper}>
        <div className={`${classes.stepNumber} ${stateClass}`}><b>{step}</b></div>
        <div className={classes.stepDesc}>
          <strong>{title}</strong>
          <p>{desc}</p>
        </div>
      </div>
    );
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <TitleBar title="Add a new widget" color="black" backgroundColor="white" showAction={false} />
      
      <div className={classes.formBody}>
        {showStep(1, step, 'Describe your widget', 'Give your widget a name and a description to explain its purpose.')}

        <Grid container spacing={3} className={classes.formRow}>
          <Grid item xs={6}>
            <FormTextField
              id="name"
              label="Name"
              value={values.name}
              onChange={(e) => handleChange(e, 1)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTextField
              id="description"
              label="Description"
              value={values.description}
              onChange={(e) => handleChange(e, 1)}
            />
          </Grid>
        </Grid>

        {showStep(2, step, 'Choose a widget type', 'Configure the kind of widget you want to render.')}

        <Grid container spacing={3} className={classes.formRow}>
          {widgets.map(item => (
            <Grid item xs={4} key={uuidv4()}>
              <WidgetCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                handleClick={() => handleChangeType(item.type)}
                color={values.type === item.type ? "success" : "initial"}
              />
            </Grid>
          ))}
        </Grid>

        {showStep(3, step, 'Input values', 'Input various values of the selected widget.')}

        <Grid container spacing={3} className={classes.formRow}>
          <Grid item xs={6}>
            <FormTextField
              id="label"
              label="Label"
              value={values.label}
              onChange={(e) => handleChange(e, 3)}
            />
          </Grid>
          <Grid item xs={6}>
            {values.type !== 2 ? (
              <FormTextField
                id="defaultValue"
                label="Default Value"
                value={values.defaultValue}
                onChange={(e) => handleChange(e, 3)}
              />) : (
              <div className={classes.switchWrapper}>
                <label htmlFor="defaultValue">Default Value</label>
                <Switch
                  id="defaultValue"
                  checked={values.defaultValue}
                  color="primary"
                  onChange={(e) => handleChange({ target: { value: e.target.checked, id: 'defaultValue' } }, 3)}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
      
      <AppBar position="static" className={classes.submitWrapper}>
        <Toolbar>
          <CustomButton text="Cancel" color="default" onAction={toggleDrawer('right', false)} />
          <div className={classes.submitRight}>
            {isEditMode ? <CustomButton text="Delete" color="primary" onAction={onDelete} /> : <div/>}
            <CustomButton text="Save" color="success" onAction={handleSave} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

  return (
    <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
    </Drawer>
  );
}

WidgetEditForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  isEditMode: PropTypes.bool
};

TitleBar.defaultProps = {
  onDelete: () => {},
  isEditMode: false
};
