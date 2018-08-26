import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

  state = {
    editing: false
  };
  
  static propTypes = {
    expense: PropTypes.object
  };
  
  render() { 
    const { editing } = this.state;
    const { expense } = this.props;

    return (
      <li>
        {editing  
          ? <ExpensesForm />
          : <ExpenseItem expense={expense}/>
        }
      </li>
    );
  }
}
 
export default Expense;