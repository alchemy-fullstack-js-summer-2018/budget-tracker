import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesByCategoryId } from './expenseReducers';
import { addExpense } from './expenseActions';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import styles from './Expenses.css';

class Expenses extends Component {
  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string.isRequired,
    addExpense: PropTypes.func.isRequired
  };

  handleAdd = expense => {
    const { categoryId, addExpense } = this.props;
    addExpense(categoryId, { ...expense });
  };

  render() {
    const { expenses } = this.props;

    return (
      <section>
        <section>
          <h3>Add an Expense</h3>
          <ExpenseForm onComplete={this.handleAdd}/>
        </section>

        {expenses &&
          <ul className={styles.expenses}>
            {expenses.map(expense => (
              <Expense
                key={expense.id}
                expense={expense}
              />
            ))}
          </ul>
        }
      </section>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { addExpense }
)(Expenses);