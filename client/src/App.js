import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter } from 'react-router-dom'


import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import BlogView from './components/BlogView'

const App = props => {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
      <NavBar />
      <SideBar />
      <BlogView />
      </BrowserRouter>
    </div>

  )
}


export default App;
