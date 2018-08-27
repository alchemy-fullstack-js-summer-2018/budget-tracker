import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { getExpensesByCategory } from './ExpenseReducers';
import { add } from './ExpenseActions';

class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { add, categoryId } = this.props;

    add(expense, categoryId);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <section>
          <h3>Add an Expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense} categoryId={categoryId}/>
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
      </div>
    );
  }
}
 

export default connect(
  (state, { categoryId }) => {
    return {
      expenses: getExpensesByCategory(state, categoryId)
    };
  },
  { add }
)(Expenses);