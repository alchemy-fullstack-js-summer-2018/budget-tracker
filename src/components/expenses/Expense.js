import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

export default class Expense extends Component {

  render() {
    return (
      <div>
        <h6>Hello Expense!</h6>
        <ExpenseItem/>
      </div>
    );
  }
}
