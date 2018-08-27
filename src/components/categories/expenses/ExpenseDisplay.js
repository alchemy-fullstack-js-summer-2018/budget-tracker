import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from '../actions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit, remove } = this.props;

    return (
      <p>
        <strong text-transformation="capitalize">Expense:</strong> {expense.name} <strong>Price:</strong> ${expense.price}
        <button name="Edit" onClick={onEdit}>✎</button> 
        <button name="Delete" onClick={() => remove(expense.id)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null, 
  { remove }
)(ExpenseDisplay);