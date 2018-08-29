import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  
  render() { 
    return (
      <div className={styles.home}>
        <h2>Welcome to the budget tracking app!</h2>
      </div>
    );
  }
}
 
export default Home;