import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends Component {
  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit } = this.props;

    return (
      <section>
        <p>{expense.name}</p>
        <p>{expense.price}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
      </section>
    );
  }
}

export default ExpenseItem;