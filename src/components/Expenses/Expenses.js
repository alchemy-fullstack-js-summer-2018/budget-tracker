import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { getExpensesByCategories } from '../reducers/expenseReducers';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.object
  };
  
  render() { 
    const { expenses } = this.props;

    return (
      <ul>
        <h4>Expenses Component</h4>
        
        <ExpensesForm />

        <Expense expenses={expenses}/>
      </ul>
    );
  }
}
 
export default connect(
  state => ({
    expenses: getExpensesByCategories(state)
  }),
  null
)(Expenses);