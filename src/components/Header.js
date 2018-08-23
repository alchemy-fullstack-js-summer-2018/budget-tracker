import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  
  handleSpecial = event => {
    event.preventDefault();
    alert('that link is so special!');
  };

  render() {

    return (
      <div className={styles.header}>

        <section className="header-container">
          <div className="logo">
            <h1>Budget</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/categories">Categories</NavLink>
              </li>
              
            </ul>
          </nav>
        </section>
      
      </div>
    );
  }
}

export default Header;