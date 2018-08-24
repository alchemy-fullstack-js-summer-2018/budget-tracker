import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesById } from './reducers';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array.isRequired
  };

  render() { 
    // const { expenses } = this.props;
    return (
      <ul>
        <li></li>
        {/* {expenses.map(expense => (
          <Expense
            key={expense.id}
            expense={expense}
          />
        ))} */}
      </ul>
    );
  }
}
 
export default connect(
  state => ({
    expenses: getExpensesById(state)
  }),
  null
)(Expenses);