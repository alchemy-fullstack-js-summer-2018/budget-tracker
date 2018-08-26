import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ExpensesForm from './ExpensesForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

  static propTypes = {
    expense: PropTypes.object
  };
  
  render() { 
    const { expense } = this.props;

    return (
      <li>
        <p>Expense</p>

        {/* <ExpensesForm /> */}

        <ExpenseItem expense={expense}/>
      </li>
    );
  }
}
 
export default Expense;