import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AppMenu from '../AppMenu'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden';
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  divRoot: {
    top: 0,
    left: 'auto',
    left: 0,
    
    display: 'flex',
    zIndex: 1100,
    boxSizing: 'border-box',
    flexShrink: 0,
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
    position: 'absolute',
    }
    },
  toolbar: theme.mixins.toolbar,

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: `url(${require('../images/bg-sidebar.jpeg')})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: 'white',
    opacity: '0.7',
    [theme.breakpoints.down('xs')]: {
      opacity:'1'
    },
  },
  typography: {
    fontFamily: "Lato",
    letterSpacing: 1,
    padding: 11,
    fontWeight: 800,
    fontSize: '1.8rem',
    color: 'black',
    '&::after': {
      content: "''",
      display: 'block',
      margin: '0 auto',
      width: '70%',
      paddingTop: '20px',
      borderBottom: '1px solid white',
    }
  }

}));

const NavBar = (props) => {
  console.log(props);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.divRoot}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
        </Toolbar>
      <nav className={classes.drawer} aria-label="blogs list">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
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
              <Typography variant="h5" align="center" color="inherit" className={classes.typography}>
                {"< 404 Found />"}
              </Typography>
            </div>
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
              <Typography variant="h5" align="center" color="inherit" className={classes.typography}>
                {"< 404 Found />"}
              </Typography>
            </div>
            <AppMenu />
          </Drawer>
        </Hidden>
      </nav>

    </div>
  )
}
export default NavBar;