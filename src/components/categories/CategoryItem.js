import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, remove } = this.props;

    return (
      <div>
        <h5>Hello CategoryItem!</h5>
        <h5>Category: {category.name}</h5>
        <h5>Budget: {category.budget}</h5>
        <button name="delete" onClick={() => remove(category.key)}>🗑</button>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryItem);
