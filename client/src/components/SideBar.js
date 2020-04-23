
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppMenu from '../AppMenu'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },

}));

const SideBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <nav className={classes.drawer} aria-label="blogs list">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <div className={classes.toolbar}>
                        <Typography variant="h5" align="center" color="inherit">
                            {"< 404 Found />"}
                        </Typography>
                    </div>
                    <Divider />
                    <AppMenu />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <div className={classes.toolbar}>
                        <Typography variant="h5" align="center" color="inherit">
                            {"< 404 Found />"}
                        </Typography>
                    </div>
                    <Divider />
                    <AppMenu />
                </Drawer>
            </Hidden>
        </nav>

    )

}

export default SideBar;