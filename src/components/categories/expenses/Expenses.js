import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesById } from './reducers';
import Expense from './Expense';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired
  };

  render() { 
    const { expenses } = this.props;

    return (
      <ul>
        <li></li>
        {expenses.map(expense => (
          <Expense
            key={expense.id}
            expense={expense}
          />
        ))}
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesById(state, categoryId)
  }),
  null
)(Expenses);