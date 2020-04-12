import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contact} />
    </>
  );
}

export default App;
