import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit } = this.props;
    return (
      <div>
        <p>{expense.name}</p>
        <p>${expense.price}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        {/* <button name="delete" onClick={() => remove(expense.key)}>🗑</button> */}
      </div>
    );
  }
}
