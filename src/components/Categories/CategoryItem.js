import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//TODO: remove --> connnect

class CategoryItem extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };
  
  render() { 
    const { category, onEdit } = this.props;
  
    return (
      <p>
        Category: {category.name}, Budget: {category.budget}
        <button name="edit" onClick={onEdit}>✏️</button>
      </p>
    );
  }
}
 
export default connect(
  null
)(CategoryItem);