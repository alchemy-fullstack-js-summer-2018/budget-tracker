import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <header>
            <Header/>
          </header>
        </div>
      </Router>
    )
  }
}
