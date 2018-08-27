import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ExpenseItem.css';
import { remove } from './actions';
class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit } = this.props;
    return (
      <div className={styles.expenseItem}>
        <p>{expense.name}</p>
        <p className="price">${expense.price}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(expense.key)}>🗑</button>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(ExpenseItem);