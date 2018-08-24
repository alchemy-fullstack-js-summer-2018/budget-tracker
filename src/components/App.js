import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
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
              <Route exact path="/" component={Home}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;