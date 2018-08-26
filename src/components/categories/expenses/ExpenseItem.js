import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object.isRequired
  };

  render() { 
    const { expense } = this.props;
    return (
      <Fragment>
        <h4>Expense: {expense.name}</h4>
        <p>Value: {expense.amount}</p>
      </Fragment>
    );
  }
}
 
export default ExpenseItem;