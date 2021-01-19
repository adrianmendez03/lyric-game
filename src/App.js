import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MobileMenu from './components/MobileMenu'
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
        <div className="logo">[News App]</div>
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
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
