import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TitleBar from '../TitleBar';
import CustomTextField from '../CustomTextField';

const successColor = '#54bd7e';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 650,
  },
  actionButton: {
  },
  formBody: {
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
    backgroundColor: successColor,
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
    backgroundColor: successColor,
  },
  stepState2: {
    backgroundColor: 'rgb(65, 85, 116)',
  },
  stepState3: {
    backgroundColor: 'rgb(247, 248, 249)',
    color: 'rgb(163, 173, 187)',
  },
}));

export default function WidgetEditForm({ open, onSave, onClose }) {
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
  });
  const [step, setStep] = React.useState(1);

  React.useEffect(() => {
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
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <CustomTextField
              id="name"
              label="Name"
              value={values.name}
              onChange={(e) => handleChange(e, 1)}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              id="description"
              label="Description"
              value={values.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} />
        </Grid>
        {showStep(2, step, 'Choose a widget type', 'Configure the kind of widget you want to render.')}
        {showStep(3, step, 'Input values', 'Input various values of the selected widget.')}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            String
          </Grid>
          <Grid item xs={4}>
            Toggle
          </Grid>
          <Grid item xs={4}>
            Upload
          </Grid>
        </Grid>
        <Button color="primary" onClick={onSave}>Save</Button>
      </div>
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
};
