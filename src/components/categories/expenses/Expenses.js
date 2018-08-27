import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { getExpensesByCategory } from './ExpenseReducers';
import { add } from './ExpenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { add, categoryId } = this.props;

    add(categoryId, expense);
  };

  render() {
    const { expenses } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <section>
          <h3>Add an Expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense}/>
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
  (state, { categoryId }) => ({
    expenses: getExpensesByCategory(state, categoryId)
  }),
  { add }
)(Expenses);