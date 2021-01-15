import './App.css';
import { Route, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Source from './pages/Source'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/source">
          <Source />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
