import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <h1>Welcome to your React App</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/categories">Categories</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default Header;