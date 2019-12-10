import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import uiReducer from './StateManager/reducers';

import SideBar from './Components/SideNavigation'
import TodayAttendance from './Components/TodayAttendance'
import Attendants from './Components/Attendants'
import AttendanceReport from './Components/AttendanceReport'
import SingleAttendanceTime from './Components/AttendanceForm'
import './Connections/initilizer'
import { getToday } from './Utilities/time'
import { setDate } from './StateManager/actions'

import EndPoints from './Some/API'


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


const store = createStore(uiReducer);

getToday(
  (res) => {
    store.dispatch(setDate(res))
  },
  () => {
    // error handling eher
  })

class App extends React.Component {
  componentDidMount() {
    EndPoints.profile.getMy().then(data => {
      if (data.success) {
        console.log('successful ', data)
      }
      else {
        console.log('failed, ', data)
      }
    })
    console.log('here')
  }

  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <SideBar />

            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={TodayAttendance} />
                <Route path="/attendants" component={Attendants} />
                <Route path="/attendaceReport" component={AttendanceReport} />
                <Route path="/attendanceForm" component={SingleAttendanceTime} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
