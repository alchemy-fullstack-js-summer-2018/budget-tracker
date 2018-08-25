import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { connect } from 'react-redux';
import { getExpenses } from './reducersExpenses';

class Expenses extends Component {

  static propTypes = {
    // expenses: PropTypes.arrayOf(PropTypes.object)
  };

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

export default connect(
  state => ({
    expenses: getExpenses(state)
  })
)(Expenses);