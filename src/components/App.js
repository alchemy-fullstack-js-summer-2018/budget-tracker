import React, { Component } from 'react';
import Dashboard from './Dashboard';
import styles from './App.css';

class App extends Component {


  render() {

    return (
      <div className={styles.app}>
        <h1>HELLO WORLD!</h1>
        <Dashboard/>
      </div>
    );
  }
}

export default App;