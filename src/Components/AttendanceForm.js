import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';

import MoreVertIcon from '@material-ui/icons/MoreVert';


const singleAttendanceTimeStyle = theme => ({
    roots: {
        paddingBottom: '30px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: theme.spacing.unit
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    action: {
        width: '30px',
        padding: '0px',
        margin: '0px'
    }
});

class SingleAttendanceTime extends React.Component {
    state = {
        disabled: true
    }

    render() {
        var { classes } = this.props
        return (
            <TableRow>
                <TableCell>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="time"
                            defaultValue="8.96"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            disabled={this.state.disabled}
                        />
                    </form>
                </TableCell>
                <TableCell>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="time delta (meter)"
                            defaultValue="8.96"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            disabled={this.state.disabled}
                        />
                    </form>
                </TableCell>
                <TableCell>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="Latitude"
                            defaultValue="8.96"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            disabled={this.state.disabled}
                        />
                    </form>
                </TableCell>

                <TableCell>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="Longitude"
                            defaultValue="8.96"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            disabled={this.state.disabled}
                        />
                    </form>
                </TableCell>

                <TableCell>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="time"
                            label="location delta (meter)"
                            defaultValue="8.96"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            disabled={this.state.disabled}
                        />
                    </form>
                </TableCell>

                <TableCell className={classes.action}>
                    <IconButton className={classes.button} aria-label="Actions" fontSize="small" onClick={(e) => {this.props.onActionClicked(1, e.currentTarget)}} >
                        <MoreVertIcon />
                    </IconButton>
                </TableCell>

            </TableRow>
        )
    }
}

SingleAttendanceTime.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SingleAttendanceTimeComp = withStyles(singleAttendanceTimeStyle)(SingleAttendanceTime);

class SingleDayAttendance extends React.Component {
    render() {
        return (
            <TableRow>

                <TableCell>
                    Monday
                </TableCell>
                <TableCell>
                    <SingleAttendanceTimeComp onActionClicked={this.props.onActionClicked} />
                    <SingleAttendanceTimeComp onActionClicked={this.props.onActionClicked}/>
                    <SingleAttendanceTimeComp onActionClicked={this.props.onActionClicked}/>
                </TableCell>
            </TableRow>

        )
    }
}

class AttendanceForm extends React.Component {
    constructor(props) {
        super(props)
        this.onActionClicked = this.onActionClicked.bind(this)
    }

    state = {
        anchorEl: null,
    };

    onActionClicked(index, target) {
        console.log('here')
        this.setState({ ...this.state, anchorEl: target })
    }
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <React.Fragment>
                <Typography>Weekly</Typography>
                <Paper>
                    <Table>
                        <TableBody>
                            <SingleDayAttendance onActionClicked={this.onActionClicked} />
                            <SingleDayAttendance onActionClicked={this.onActionClicked}/>
                            <SingleDayAttendance onActionClicked={this.onActionClicked}/>
                        </TableBody>

                    </Table>

                </Paper>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}>

                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Edit" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <ListItemIcon className={classes.icon}>
                            <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Delete" />
                    </MenuItem>
                </Menu>
            </React.Fragment>

        )

    }
}

const attendanceFormStyle = theme => ({})


export default withStyles(attendanceFormStyle)(AttendanceForm);