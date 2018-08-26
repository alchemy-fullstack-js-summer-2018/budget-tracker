import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from '../reducers/expenseReducers';

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
        <h4>Expenses Component</h4>
        
        {/* <ExpensesForm /> */}

        {expenses.map(expense => {
          return <Expense 
            key={expense.id}
            expense={expense}
          />;
        })
        }
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  null
)(Expenses);