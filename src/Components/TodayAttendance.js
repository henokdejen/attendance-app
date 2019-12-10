import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AttendanceList from './AttendanceList'

import {AttendanceTable } from '../Connections/firebase'
import {getTimeWithAmPm} from '../Utilities/time'
import {showProgress, closeProgress} from '../StateManager/actions'
import { connect } from 'react-redux';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        width: '97%',
        margin: 'auto'
    }
});

class TodayAttendance extends React.Component {
    isDataLoaded = false
    state = {
        weekly: [],
        specail: [],
    }

    loadAttendanceInformation() {
        // here we load the general attendance information for the day

    }

    loadAttendances() {
        //load weekly Attendane
        if (this.isDataLoaded) return
        const that = this
        AttendanceTable.child("weekly").once("value").then(function (snapshot) {
            let outerID = -1
            const data = snapshot.val().map((oneTimeAttendance) => {
                const time = oneTimeAttendance.time;
                
                outerID++
                let id = -1
                const attendanceData = oneTimeAttendance.attendanceList.map((x) => {
                    id++;
                    const timeSigned = getTimeWithAmPm(x.hr, x.minute)
                    return {
                        attendantName: x.attendantName,
                        late: x.late,
                        time: timeSigned,
                        id: id
                    }
                })

                return {
                    id: outerID,
                    time: time,
                    attendanceData: attendanceData
                }

            })
            that.setState({
                ...that.state,
                weekly: data
            })

            that.props.dispatch(closeProgress())
            that.isDataLoaded = true
            console.log(that.state)
        })


        //load special Attendance
    }

    componentDidMount(){
        this.props.dispatch(showProgress())
        this.loadAttendances();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.attendanceSection}>Weekly</Typography>

                {
                    this.state.weekly.map((data)=> {
                        return <AttendanceList key = {data.id} data = {data}/>
                    }
                         
                    )
                }
                <Typography className={classNames(classes.attendanceSection, classes.secondWithTopMargin)}>Special</Typography>

            </div>
        );
    }
}


TodayAttendance.propTypes = {
    classes: PropTypes.object.isRequired,
};


const styled = withStyles(styles, { withTheme: true })(TodayAttendance);

const mapStatesToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStatesToProps)(styled);
