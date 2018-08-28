import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from '../expensesByCategory-actions';

class ExpensesDisplay extends Component {
  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit, remove } = this.props;
    const { name, amount } = expense;

    return (
      <div>
        <p>
          {name}: ${amount}
          <button name="edit" onClick={onEdit}>Edit</button>
          <button name="delete" onClick={() => remove(expense.id)}>Delete</button>
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(ExpensesDisplay);