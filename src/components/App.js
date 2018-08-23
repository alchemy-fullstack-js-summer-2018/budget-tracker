import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Dashboard from './categories/Dashboard';

class App extends Component {
  render() { 

    return ( 
      <Router>
        <div>
          <header>
            <Header/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/categories" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
     );
  }
}
 
export default App;