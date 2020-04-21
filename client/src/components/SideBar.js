
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppMenu from '../AppMenu'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240;
const useStyles = makeStyles((theme)=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      toolbar: theme.mixins.toolbar,
  
}));

const SideBar = () => {
    const classes = useStyles();
    return (
        <div>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}>
                <Typography variant="h5" align="center" color="inherit">
                {"< 404 Found />"}
            </Typography>
                </div>
                <Divider />
                <AppMenu />
            </Drawer>
        </div>
    )

}

export default SideBar;