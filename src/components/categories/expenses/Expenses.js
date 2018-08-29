import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesById } from './reducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { addExpense } from './actions';
import styles from './Expenses.css';

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
        <ul className={styles.expenses}>
          {expenses.map(expense => (
            <Expense
              key={expense.key}
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