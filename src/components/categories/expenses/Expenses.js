import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array
  };

  render() {
    const { expenses } = this.props;

    return (
      <ul>
        {expenses.map(expense => (
          <Expense
            key={expense.key}
            expense={expense}
          />
        ))}
      </ul>
    );
  }
}

export default Expenses;