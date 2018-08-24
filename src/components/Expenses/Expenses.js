import React, { Component } from 'react';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';

class Expenses extends Component {
  
  render() { 

    return (
      <ul>
        <h4>Expenses Component</h4>
        
        <ExpensesForm />

        <Expense />
      </ul>
    );
  }
}
 
export default Expenses;