import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { openDrawerAction } from '../StateManager/actions'
import LinearProgress from '@material-ui/core/LinearProgress';



const drawerWidth = 240;
const styles = theme => ({
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    linearColorPrimary: {
        backgroundColor: '#b2dfdb',
    },
    linearBarColorPrimary: {
        backgroundColor: '#00695c',
    }
});



class Header extends React.Component {

    handleDrawerOpen = () => {
        this.props.dispatch(openDrawerAction())
    };

    render() {
        const { classes } = this.props;

        return (
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: this.props.drawerOpen,
                })}>
                {this.props.showProgress && <LinearProgress color="secondary"/>}

                <Toolbar disableGutters={!this.props.drawerOpen}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, {
                            [classes.hide]: this.props.drawerOpen,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        {this.props.pageTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const styled = withStyles(styles, { withTheme: true })(Header);

const mapStatesToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStatesToProps)(styled);



