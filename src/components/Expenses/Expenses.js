import React, { Component } from 'react';
import ExpensesForm from './ExpensesForm';

class Expenses extends Component {
  
  render() { 

    return (
      <section>
        <h4>Expenses Component</h4>
        <ExpensesForm />
      </section>
    );
  }
}
 
export default Expenses;