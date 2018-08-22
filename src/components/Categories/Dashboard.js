import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import styles from './Categories.css';

class Dashboard extends Component {
  
  render() { 
    return ( 
      <div className={styles.categories}>
        <h2>Dashboard Component</h2>

        <CategoryForm />
      </div>
    );
  }
}
 
export default Dashboard;