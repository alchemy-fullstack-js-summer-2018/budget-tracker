import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from './reducers/expenseReducers';
import { add } from './reducers/expenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = (expense) => {
    const { add, categoryId } = this.props;

    add({ ...expense }, categoryId);
  };

  render() { 
    const { expenses, categoryId } = this.props;

    return (
      <ul>
        <section className="expenses-form">
          <h3>Add an Expense:</h3>
          <ExpensesForm 
            onComplete={this.handleAddExpense}
          />
        </section>

        {expenses &&
          <section>
            {expenses.map(expense => {
              return <Expense 
                key={expense.key}
                expense={expense}
                categoryId={categoryId}
              />;
            })
            }
          </section>
        }
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { add }
)(Expenses);