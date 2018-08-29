import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  render() { 
    return (
      <div className={styles.header}>
        <h1>Budget Tracker</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                exact activeStyle={{ color: 'rgb(255, 102, 102)' }}
                to="/"
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
                exact activeStyle={{ color: 'rgb(255, 102, 102)' }}
                to="/categories"
              >Budget</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default Header;