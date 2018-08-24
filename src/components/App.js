import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
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
            <h2>I Am App</h2>
            <Switch>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;