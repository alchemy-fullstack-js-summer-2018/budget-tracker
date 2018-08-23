import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//TODO: remove --> connnect

class CategoryItem extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired
  };
  
  render() { 
    const { category } = this.props;
  
    return (
      <p>
        Category: {category.name}, Budget: {category.budget}
      </p>
    );
  }
}
 
export default connect(
  null
)(CategoryItem);