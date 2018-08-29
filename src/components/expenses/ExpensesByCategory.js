import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './ExpenseByCategory';
import ExpenseForm from './ExpenseByCategoryForm.js';
import { connect } from 'react-redux';
import { getExpensesById } from '../expensesByCategory-reducers';
import { addExpense } from '../expensesByCategory-actions';


class Expenses extends Component {

  
  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    addExpense: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { categoryId, addExpense } = this.props;
    addExpense(categoryId, { ...expense });
  };

  render() { 
    const { expenses } = this.props;
    return (
      <div>
        <ExpenseForm onComplete={this.handleAddExpense}/>
        <ul>
          {!!expenses &&
          expenses.map(expense => (
            <Expense
              key={expense.key}
              expense={expense}
            />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({ expenses: getExpensesById(state, categoryId) }),
  { addExpense }
)(Expenses);