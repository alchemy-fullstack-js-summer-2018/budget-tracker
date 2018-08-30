import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './Expenses';

class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div>
        {category.name} allowed {category.budget}
        <Expenses categoryId = {category.key}/>   
        <button name="edit" onClick={onEdit}>✎</button>
        <button id="delbtn" name="delete" onClick={() => remove(category.key)}>🗑</button>  
      </div>
    );
  }
}

export default connect (
  null,
  { remove }
)(CategoryDisplay);