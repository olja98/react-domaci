
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Accessories from './pages/Accessories';
import Candles from './pages/Candles';

function App() {

  
  return (
   <Router>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/candles" component={Candles} exact/>
    <Route path="/accessories" component={Accessories} exact/>
  </Switch>

   </Router>

  );
}

export default App;
