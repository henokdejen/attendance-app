import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';
import { showProgress, closeProgress } from '../StateManager/actions'

const styles = theme => ({
    grid: {
        width: '100%',
    },
    narrowCol: {
        width: '10%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    dense: {
        marginTop: 19,
    },
    button: {
        height: 40,
    }
});


class AttendanceReport extends React.Component {
    state = {
        // The first commit of Material-UI
        selectedDate: null,
        filterName: '',
        filterNameRequired: false,
        filterDateRequired: true,
        rows: []
    };

    handleDateChange = date => {
        this.setState({ ...this.state, selectedDate: date });
        console.log(this.state.selectedDate)
    };

    handleShowReport = (e) => {
        e.preventDefault()
        this.props.dispatch(showProgress())
    }
    onFilterNameChange = e => {
        this.setState({
            ...this.state,
            filterName: e.target.value
        })
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;

        return (
            <Paper>
                <form onSubmit={this.handleShowReport}>
                    <Grid container className={classes.grid} justify="space-around">

                        <TextField
                            id="standard-dense"
                            label="Filter by name"
                            className={classNames(classes.textField, classes.dense)}
                            margin="dense"
                            onChange={this.onFilterNameChange}
                            />

                        <TextField
                            id="date"
                            label="Filter by date"
                            type="date"
                            className={classNames(classes.textField, classes.dense)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="dense"
                            onChange = {this.handleDateChange}
                            required={!Boolean(this.state.filterName) } />

                        <Button
                            variant="text"
                            color="primary"
                            type="submit"
                            className={classNames(classes.dense, classes.button)}
                            margin="dense">
                            Show Report
                    </Button>
                    </Grid>
                </form>

                <Divider />

                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Attendant Name</TableCell>
                            <TableCell align="center">Time Attendance Signed</TableCell>
                            <TableCell align="center">Late (minutes)</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center" className={classes.narrowCol}>{row.calories}</TableCell>
                                <TableCell align="center" className={classes.narrowCol}>{row.fat}</TableCell>
                                <TableCell align="center" className={classes.narrowCol}>{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>


        );
    }
}

AttendanceReport.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles)(AttendanceReport);

const mapStatesToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStatesToProps)(styled);