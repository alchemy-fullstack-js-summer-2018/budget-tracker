import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Dashboard from './Categories/Dashboard';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <header className={styles.app}>
            <h1>Budget Tracker</h1>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;