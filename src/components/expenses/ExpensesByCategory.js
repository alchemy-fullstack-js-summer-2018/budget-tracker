import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './ExpenseByCategory';
import ExpenseForm from './ExpenseByCategoryForm.js';
import { connect } from 'react-redux';
import { getExpensesByCategoryId } from '../expensesByCategory-reducers';
import { add } from '../expensesByCategory-actions';


class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
  };

  render() { 
    const { expenses, add, categoryId } = this.props;
    return (
      <div>
        <ExpenseForm categoryId={categoryId} onComplete={add}/>
        <ul>
          {!!expenses &&
          expenses.map(expense => (
            <Expense
              key={expense.categoryId}
              expense={expense}
            />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({ expenses: getExpensesByCategoryId(state, categoryId) }),
  { add }
)(Expenses);