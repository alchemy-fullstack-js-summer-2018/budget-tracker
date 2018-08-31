import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from './reducers/expenseActions';

class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    remove: PropTypes.func
  };
  
  render() { 
    const { expense, onEdit, remove } = this.props;

    return (
      <section className="expense-item">
        <button name="edit" onClick={onEdit}>✏️</button>&nbsp;
        <button name="delete" onClick={() => remove(expense)}>🗑️</button>&nbsp;
        <strong>{expense.name}</strong><span className="price">Price: {expense.price}</span>
      </section>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(ExpenseItem);