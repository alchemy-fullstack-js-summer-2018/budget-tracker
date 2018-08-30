import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add } from './actions';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { getExpenses } from './reducers';

class Expenses extends Component {
  
  static PropTypes = {
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
        <section>
          <h2>Add An Expense: </h2>
          <ExpenseForm
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
    expenses: getExpenses(state, categoryId)
  }),
  { add }
)(Expenses);