import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MobileMenu from './components/MobileMenu'
import Nav from './components/Nav'
import Home from './pages/Home'
import Sources from './pages/Sources'
import Source from './pages/Source'
import Search from './pages/Search'
import './pages/pages.css'
import './Header.css'



function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-inner">
          <div className="logo">
            [News App]
          </div>
          <div className="nav-container">
            <Nav />
          </div>
        </div>
      </div>
      <MobileMenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sources">
          <Sources />
        </Route>
        <Route
          path="/sources/:source"
          render={(routerProps) => <Source {...routerProps}/>}
        />
        <Route 
          path="/search/:term"
          render={(routerProps) => <Search {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
