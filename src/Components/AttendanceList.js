import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
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
    }
});


class AttendanceList extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Time -   2:30 PM</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <div className={classes.detailWrapper}>
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
                                {this.props.data.attendanceData.map(row => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.attendantName}
                                        </TableCell>
                                        <TableCell align="center" className={classes.narrowCol}>{row.time}</TableCell>
                                        <TableCell align="center" className={classes.narrowCol}>{row.late}</TableCell>
                                        <TableCell align="center" className={classes.narrowCol}>
                                            <IconButton aria-label="Actions" className={classes.margin} onClick={this.handleClick}>
                                                <MoreVertIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <div className={classes.addIconWrapper}>
                            <IconButton className={classes.addIcon}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    </div>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

AttendanceList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttendanceList);