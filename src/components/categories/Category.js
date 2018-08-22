import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Category extends Component {

  render() {
    return (
      <div>
        <h4>Hello Category!</h4>
        <CategoryItem/>
      </div>
    );
  }
}

export default Category;
