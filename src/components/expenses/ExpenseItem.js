import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

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
        {expense.name} expense is ${expense.price}
        <button name="edit" onClick={onEdit}>✏️</button>&nbsp;
        <button name="delete" onClick={() => remove(expense)}>🗑️</button>&nbsp;
        {/* <strong>{expense.name}</strong><span className="price">Price: {expense.price}</span> */}
      </section>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(ExpenseItem);