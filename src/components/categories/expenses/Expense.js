import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

  static propTypes = {
    expense: PropTypes.object.isRequired
  };

  render() { 
    const { expense } = this.props;
    return (
      <ExpenseItem expense={expense}/>
    );
  }
}
 
export default Expense;