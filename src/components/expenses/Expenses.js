import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from './reducers';
import { addExpense } from './actions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;

    addExpense(categoryId, expense);
  };
  
  render() { 
    const { expenses, categoryId } = this.props;
    

    return (
      <ul>
        <section className="expenses-form">
          <h3>Add an Expense:</h3>
          <ExpenseForm 
            onComplete={this.handleAddExpense}
            categoryId={categoryId}
          />
        </section>
        {expenses &&
        <section>
          { expenses.map(expense => {
            return <Expense 
              key={expense.id}
              expense={expense}
              // categoryId={categoryId}
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
  { addExpense }
)(Expenses);