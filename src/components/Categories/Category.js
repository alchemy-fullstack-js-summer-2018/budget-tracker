import React, { Component } from 'react';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';

class Category extends Component {
  
  render() { 
    
    return (
      <div style={{ color: 'green' }}>
        <h4>Category Component</h4>

        <CategoryForm/>

        <CategoryItem />
      </div>
    );
  }
}
 
export default Category;