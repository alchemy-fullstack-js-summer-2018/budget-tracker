import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  render() { 
    const { expenses, categoryId, add } = this.props;

    return (
      <ul>
        <section className="expenses-form">
          <h3>Add an Expense:</h3>
          <ExpensesForm 
            onComplete={add}
            categoryId={categoryId}
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