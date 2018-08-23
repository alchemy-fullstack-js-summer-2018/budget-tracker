import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired
  };
  render() { 
    const { category } = this.props;
    return (
      <div>
        <p>
          Category: {category.name}
        </p>
        <p>Budget: {category.budget}</p>
        <p>Created: {category.timeEntered}</p>

      </div>
    );
  }
}
 
export default CategoryDisplay;