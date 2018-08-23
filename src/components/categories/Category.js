import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Category extends Component {

  render() {
    return (
      <div>
        <h3>Category</h3>
        <CategoryItem/>
      </div>
    );
  }
}

export default Category;
