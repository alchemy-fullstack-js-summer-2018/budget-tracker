import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { add } from './ExpenseActions';

class Expenses extends Component {

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
    const { expenses, categoryId } = this.props;

    return (
      <div>
        <section>
          <h3>Add a Expense</h3>
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
  (state, props) => {
    return {
      expenses: state.getExpensesByCategoryId[props.categoryId]
    };
  },
  { add }
)(Expenses);