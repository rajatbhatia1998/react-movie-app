import React from 'react';
import './App.css';
import MainDrawer from './Components/Drawer'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Movies from './Components/Movies'

function App() {
  return (
    <div className="App">
    
      <Router>
      <MainDrawer/>
        <Switch>
          <Route exact={true} path='/home'>
            <Home/>
          </Route>
          <Route exact={true} path='/'>
            <Home/>
          </Route>
          <Route  path='/movies'>
            <Movies/>
          </Route>

          <Route  path='/contact'>
            <Contact/>
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
