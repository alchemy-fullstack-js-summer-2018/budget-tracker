import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    add: PropTypes.func.isRequired
  };

  render() {
    const { expenses } = this.props;

    return (
      <ul>
        {expenses.map(expense => {
          return <Expense
            key={expense.id}
            expense={expense}
          />;
        })
        }
      </ul>
    );
  }
}

export default Expenses;