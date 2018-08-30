import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from '../expenses/Expenses';

class CategoryDisplay extends Component {
  
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <p>
        {category.name}: {category.budget}
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(category.key)}>🗑</button>
        <Expenses categoryId = {category.key}/>
      </p>
    );
  }
}

export default connect (
  null, 
  { remove }
)(CategoryDisplay);

