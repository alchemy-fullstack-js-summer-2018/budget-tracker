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
      <div>
        <ul>
          {expenses.map(expense => (
            <Expense
              key={expense.key}
              expense={expense}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Expenses;