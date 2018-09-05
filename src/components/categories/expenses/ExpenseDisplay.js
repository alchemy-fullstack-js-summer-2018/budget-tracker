import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './ExpenseActions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    remove: PropTypes.func
  };

  render() {
    const { expense, onEdit, remove } = this.props;

    return (
      <p>
        <strong text-transformation="capitalize">Expense:</strong> {expense.name} <strong>Price:</strong> ${expense.price}
        <button name="Edit" onClick={onEdit}>✎</button> 
        <button name="Delete" onClick={() => remove(expense)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null, 
  { remove }
)(ExpenseDisplay);