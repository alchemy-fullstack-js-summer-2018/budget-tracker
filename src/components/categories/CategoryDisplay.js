import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './expenses/Expenses';
import { getTotalExpensesByCategoryId } from './expenses/reducers';

export class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    totalExpenses: PropTypes.any
  };

  render() { 
    const { category, remove, onEdit, totalExpenses } = this.props;
    return (
      <div>
        <p>
          Category: {category.name}
        </p>
        <p>Budget: ${category.budget}</p>
        <p>You have spent: ${totalExpenses}</p>
        <p>Created: {category.timeStamp}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(category.key)}>❌</button>
        <Expenses categoryId={category.key}/>
      </div>
    );
  }
}
 
export default connect(
  (state, { category }) => ({
    totalExpenses: getTotalExpensesByCategoryId(state, category.key)
  }),
  { remove }
)(CategoryDisplay);