import React, { Component } from 'react';
import CategoryForm from './categories/CategoryForm';
import Categories from './categories/Categories';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h2>Hello Dashboard!</h2>
        <CategoryForm/>
        <Categories/>
      </div>
    );
  }
}

export default Dashboard;
