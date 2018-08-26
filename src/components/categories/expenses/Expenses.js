import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';

export class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array
  };

  render() {
    const { expenses, categoryId } = this.props;

    return (
      <div>
        <h2>Expenses</h2>
        <ExpenseForm categoryId={categoryId}/>
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

export default connect(
  (state, props) => {
    return {
      expenses: state.expensesByCategory[props.categoryId]
    };
  },
)(Expenses);