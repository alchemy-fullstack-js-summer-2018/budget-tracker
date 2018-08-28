import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends Component {

  handleSpecial = event => {
    event.preventDefault();
    alert('that link is cute!');
  };

  render()  {

    return (
      <div className={styles.header}>
      
        <section className="header-container">      
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/Landing">Landing</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/Dashboard">Dashboard</NavLink> 
              </li>
            </ul>
          </nav>
        </section>

        <Error/>
      </div>
    );
  }
}

export default Header;