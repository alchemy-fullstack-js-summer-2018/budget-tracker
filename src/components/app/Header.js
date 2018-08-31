import React, { Component } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav id="nav-ul">
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }} 
                exact activeStyle={{ color: '#F4F9F4', borderBottom: '2px solid #F4F9F4', fontWeight: 'bold' }}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }} 
                activeStyle={{ color: '#F4F9F4', borderBottom: '2px solid #F4F9F4', fontWeight: 'bold' }}
              >Dashboard</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;