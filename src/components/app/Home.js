import React, { Component } from 'react';
import styles from './Home.css';
//TODO: find solution for navlink/link pseudo css classes bug
class Home extends Component {
  
  render() { 
    return (
      <div className={styles.home}>
        <h2>Welcome to the budget tracking app!</h2>
        <p>Details coming soon...</p>
        <p>Go to your <a href="/Dashboard">Dashboard</a> to get started!</p>
      </div>
    );
  }
}
 
export default Home;