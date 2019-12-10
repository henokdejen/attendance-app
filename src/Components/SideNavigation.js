import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TodayIcon from '@material-ui/icons/Today';
import { NavLink } from "react-router-dom";

import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SettingsIcon from '@material-ui/icons/Settings';


import Header from './Header'
import { connect } from 'react-redux';
import { closeDrawerAction, changePageTitle } from '../StateManager/actions'





const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        "&$selected": {
            backgroundColor: "red !important"
        }
    },
    selected: {},
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    link: {
        textDecoration: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    appName: {
        justifyContent: 'flex-center',
    },
    activeLink: {
        backgroundColor: '#000'
    }
});

class MiniDrawer extends React.Component {

    handleDrawerClose = () => {
        this.props.dispatch(closeDrawerAction());
    };

    changeTitle = (title) => {
        this.props.dispatch(changePageTitle({ title }))
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.props.drawerOpen,
                        [classes.drawerClose]: !this.props.drawerOpen,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.props.drawerOpen,
                            [classes.drawerClose]: !this.props.drawerOpen,
                        }),
                    }}
                    open={this.props.drawerOpen}
                >
                    <div className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.appName}>
                            Attendance
                        </Typography>

                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>

                    </div>
                    <Divider />
                    <List>
                        <NavLink to="/" className={classes.link}
                            onClick={() => { this.changeTitle("Today - " + this.props.date.date) }}
                            activeClassName={classes.activeLink}>
                            <ListItem button>
                                <ListItemIcon>
                                    <TodayIcon />
                                </ListItemIcon>
                                <ListItemText primary="Today" />
                            </ListItem>
                        </NavLink>

                        <NavLink to="/attendants" className={classes.link}
                            onClick={() => { this.changeTitle("Attendants") }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Attendants" />
                            </ListItem>
                        </NavLink>


                        <NavLink to="/attendanceForm" className={classes.link}
                            onClick={() => { this.changeTitle("Attendance Form Creator") }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ScheduleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Form" />
                            </ListItem>
                        </NavLink>

                        <NavLink to="/attendaceReport" className={classes.link}
                            onClick={() => { this.changeTitle("Attendance Report") }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <img src="https://img.icons8.com/material/24/000000/attendance-mark.png" alt="" />
                                </ListItemIcon>
                                <ListItemText primary="Report" />
                            </ListItem>
                        </NavLink>
                    </List>
                    <Divider />
                    <List>

                        <NavLink to="/d" className={classes.link}
                            onClick={() => { this.changeTitle("Settings") }}>
                            <ListItem button>
                                <ListItemIcon><SettingsIcon /></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                        </NavLink>
                    </List>
                </Drawer>
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { withTheme: true })(MiniDrawer);

const mapStatesToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStatesToProps)(styled);
