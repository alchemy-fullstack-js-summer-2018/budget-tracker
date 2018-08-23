import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';
//TODO: update -- don't forget to connect
//TODO: edit

class Category extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired
  };
  
  render() { 
    const { category } = this.props;
    
    return (
      <li style={{ color: 'green' }}>
        <h4>Category Component</h4>

        <CategoryForm
          category={category}
        />

        <CategoryItem 
          category={category}
        />
      </li>
    );
  }
}
 
export default connect(
  null
)(Category);