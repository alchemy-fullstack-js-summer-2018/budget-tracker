import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../home/Header';
import Home from '../home/Home';
import Dashboard from '../categories/Dashboard';
import styles from './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <header>
            <Header/>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;