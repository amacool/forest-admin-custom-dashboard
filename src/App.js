import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import DemoBoard from './demo';

import { urlLabel } from './utils/const';
import 'react-perfect-scrollbar/dist/css/styles.css';

import './App.scss';

const defaultTheme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  bodySection: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#ddd',
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
  },
  appContent: {
    height: 'calc(100% - 210px)',
    padding: theme.spacing(1.875),

    '& > .scrollbar-container': {
      padding: theme.spacing(1.875),
    },
  },
}));

const App = ({ history }) => {
  const classes = useStyles();
  const [path, setPath] = useState(history.location.pathname);

  history.listen((location) => {
    setPath(location.pathname);
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <NavBar path={path} />
        <div className={classes.bodySection}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}>
              <div className="top-title-bar">
                <label>{urlLabel[path]}</label>
              </div>
            </div>

            <div className={classes.appContent}>
              <PerfectScrollbar>
                <Router history={history}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/demo" component={DemoBoard} />
                  </Switch>
                </Router>
              </PerfectScrollbar>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

App.defaultProps = {
  history: {},
};
export default withRouter(App);
