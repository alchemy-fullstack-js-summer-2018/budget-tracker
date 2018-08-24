import React, { Component } from 'react';
import ExpensesForm from './ExpensesForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {
  
  render() { 

    return (
      <li>
        <p>Expense</p>

        <ExpensesForm />

        <ExpenseItem />
      </li>
    );
  }
}
 
export default Expense;