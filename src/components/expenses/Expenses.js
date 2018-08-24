import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';

export default class Expenses extends Component {

  render() {
    return (
      <div>
        <h6>Hello Expenses!</h6>
        <ExpenseForm/>
        <Expense/>
      </div>
    );
  }
}
