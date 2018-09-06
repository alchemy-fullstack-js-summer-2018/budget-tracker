import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from './reducers';
import { add } from './actions';

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
          <ExpenseForm 
            categoryId={categoryId}
            onComplete={this.handleAddExpense}
          />
        </section>
        {expenses &&
        <section>
          { expenses.map(expense => {
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