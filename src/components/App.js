import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
//import Dashboard from './categories/Dashboard';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>

          <main>
            <h1>Budget Tracker</h1>
            
           
          </main>
        </div>
      </Router>
    );
  }
}

export default App;