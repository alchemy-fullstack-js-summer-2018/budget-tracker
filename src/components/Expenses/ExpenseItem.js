import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object
  };
  
  render() { 
    const { expense } = this.props;

    return (
      <p>{expense.name} {expense.price}</p>
    );
  }
}
 
export default ExpenseItem;