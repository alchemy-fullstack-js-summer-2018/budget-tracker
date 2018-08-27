import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesById } from './expenseReducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { addExpense } from './expenseActions';

class Expenses extends PureComponent {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    addExpense: PropTypes.func.isRequired
  };

  handleExpenseAdd = expense => {
    const { categoryId, addExpense } = this.props;
    addExpense(categoryId, { ...expense });
  };

  render() { 
    const { expenses } = this.props;

    return (
      <Fragment>
        <h4>Add a new expense:</h4>
        <ExpenseForm
          onComplete={this.handleExpenseAdd}
        />
        <ul>
          {expenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesById(state, categoryId)
  }),
  { addExpense }
)(Expenses);