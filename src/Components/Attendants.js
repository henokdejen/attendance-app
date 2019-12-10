import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';

import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';

import {AttendantsTable} from '../Connections/firebase'

import {showProgress, closeProgress} from '../StateManager/actions'
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        width: '97%',
        height: '100%',
        margin: 'auto'

    },
    paperRoot: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
    },
    lateAttendace: {
        backgroundColor: 'red',
        width: '20px'
    },
    narrowCol: {
        width: '10%',
    },
    detailWrapper: {
        width: '100%'
    },
    addIconWrapper: {
        width: '100%',
        marginTop: '20px',
    },
    addIcon: {
        float: 'right',
        backgroundColor: theme.palette.primaryColor
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 4,
        right: theme.spacing.unit * 4,
    }
});


class Attendants extends React.Component {
    state = {
        anchorEl: null,
        attendants: []
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    loadAttendants = () => {
        const that = this
        this.props.dispatch(showProgress())
        AttendantsTable.once('value').then(function(snapshot){
            let id = -1
            const data = snapshot.val().map((x) => {
                id++;
                return {
                    id: id,
                    fullName: x.fullName,
                    deviceID: x.deviceID
                }
            });

            that.setState({
                ...that.state,
                attendants: data})
            that.props.dispatch(closeProgress())
        })
    }

    componentDidMount(){
        this.loadAttendants()
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Attendant Name</TableCell>
                                <TableCell align="center"> Device ID</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.attendants.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.fullName}
                                    </TableCell>
                                    <TableCell align="center" className={classes.narrowCol}>{row.deviceID}</TableCell>
                                    <TableCell align="center" className={classes.narrowCol}>
                                        <IconButton aria-label="Delete" className={classes.margin} onClick={this.handleClick}>
                                            <MoreVertIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

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


                </Paper>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </div>

        )
    }
}

Attendants.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { withTheme: true })(Attendants);

const mapStatesToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStatesToProps)(styled);