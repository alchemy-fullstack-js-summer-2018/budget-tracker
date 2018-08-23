import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <h5>Hello CategoryItem!</h5>
        <h5>Category Name</h5>
        <h5>Category Budget</h5>
      </div>
    );
  }
}

export default CategoryItem;
