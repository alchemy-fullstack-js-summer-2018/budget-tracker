import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from './Expenses';
import ExpenseForm from './ExpenseForm';
import getExpensesByCategoryId from './ExpenseReducers';
import { add, update } from './ExpenseActions';

class ExpensesContainer extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { add } = this.props;

    expense.categoryId = this.props.categoryId;
    add(expense);
  };

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <section>
          <h3>Add a Expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense}/>
        </section>

        {expenses && 
          <section>
            <h3>Expenses</h3>
            <Expenses 
              expenses={expenses}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}
 

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { add }
)(ExpensesContainer);