import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from '../reducers/expenseReducers';
import { addExpense } from '../reducers/expenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string
  };
  
  render() { 
    const { expenses } = this.props;
    if(!expenses) return null;

    return (
      <ul>
        <section className="expenses-form">
          <h3>Add an Expense:</h3>
          <ExpensesForm onComplete={addExpense}/>
        </section>

        <section>
          {expenses.map(expense => {
            return <Expense 
              key={expense.id}
              expense={expense}
            />;
          })
          }
        </section>
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { addExpense }
)(Expenses);