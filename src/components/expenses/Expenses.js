import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { connect } from 'react-redux';
import { getExpensesById } from './reducersExpenses';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryKey: PropTypes.string.isRequired
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <h6>Hello Expenses!</h6>
        <ExpenseForm/>
        <ul>
          {expenses.map(expense => (
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
  (state, { categoryKey }) => ({
    expenses: getExpensesById(categoryKey, state)
  })
)(Expenses);