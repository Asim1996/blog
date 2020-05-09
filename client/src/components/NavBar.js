import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';

import AppMenu from '../AppMenu'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden';
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  divRoot:{
    [theme.breakpoints.down('xs')]: {
      width:0,
      background:'none'
    },
  },
  
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
    // background: '#232526',
    // background: '-webkit-linear-gradient(to right, #414345, #232526)',
    // background: 'linear-gradient(to right, #414345, #232526)',
    // background: 'url("https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")',
    background:`url(${require('../images/bg-sidebar.jpeg')})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: 'white',
    opacity: '0.7'
  },
  typography: {
    fontFamily: "Lato",
    letterSpacing: 1,
    padding: 11,
    fontWeight: 800,
    fontSize:'1.8rem',
    color:'black',
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