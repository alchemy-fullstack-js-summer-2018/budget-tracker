import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { connect } from 'react-redux';
import { getExpensesById } from './reducersExpenses';
import { add } from './actions';
import styles from './Expenses.css';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryKey: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
  };

  render() {
    const { expenses, categoryKey, add } = this.props;

    return (
      <div className={styles.expenses}>
        <ExpenseForm
          onComplete={add}
          categoryKey={categoryKey}
        />
        <div className="expenseList">
          {!!expenses &&
          expenses.map(expense => (
            <Expense
              key={expense.key}
              expense={expense}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, { categoryKey }) => ({
    expenses: getExpensesById(categoryKey, state)
  }), { add }
)(Expenses);