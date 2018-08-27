import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from './expenseActions';

class ExpenseItem extends PureComponent {

  static propTypes = {
    expense: PropTypes.object.isRequired,
    removeExpense: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() { 
    const { expense, removeExpense, onEdit } = this.props;
    return (
      <Fragment>
        <h4>Expense: {expense.name}</h4>
        <p>Value: {expense.amount}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => removeExpense(expense)}>❌</button>
      </Fragment>
    );
  }
}
 
export default connect(
  null,
  { removeExpense }
)(ExpenseItem);