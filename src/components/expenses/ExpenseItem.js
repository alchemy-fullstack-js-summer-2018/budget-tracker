import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ExpenseItem.css';
import { remove } from './actions';
class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit, remove } = this.props;
    return (
      <div className={styles.expenseItem}>
        <div className="content">
          <div className="name">
            {expense.name}:
          </div>
          <div className="price">
            ${expense.price}
          </div>
        </div>
        <div className="buttons">
          <button name="edit" onClick={onEdit}>✏️</button>
          <button name="delete" onClick={() => remove(expense)}>❌</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(ExpenseItem);