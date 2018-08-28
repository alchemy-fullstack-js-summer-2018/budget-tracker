import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() { 
    return (
      <div className={styles.home}>
        <h2>Set Up A Budget And Track Expenses!</h2>
        <p> Head over to the dashboard to get started.</p>
      </div>
    );
  }
}
 
export default Home;