import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';

class Category extends Component {
  
  render() { 
    
    return (
      <li style={{ color: 'green' }}>
        <h4>Category Component</h4>

        <CategoryForm/>

        <CategoryItem />
      </li>
    );
  }
}
 
export default Category;