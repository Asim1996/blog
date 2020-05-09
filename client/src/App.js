import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
import BlogView from './components/BlogView'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:'100vw',
    height:'100vh'
  },
}));



const App = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <BlogView />
      </BrowserRouter>
    </div>

  )
}


export default App;
