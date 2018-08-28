import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from './actions';

class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    removeExpense: PropTypes.func
  };
  
  render() { 
    const { expense, onEdit, removeExpense } = this.props;

    return (
      <section className="expense-item">
        {expense.name} expense is ${expense.price}
        <button name="edit" onClick={onEdit}>✏️</button>&nbsp;
        <button name="delete" onClick={() => removeExpense(expense)}>🗑️</button>&nbsp;
        {/* <strong>{expense.name}</strong><span className="price">Price: {expense.price}</span> */}
      </section>
    );
  }
}
 
export default connect(
  null,
  { removeExpense }
)(ExpenseItem);