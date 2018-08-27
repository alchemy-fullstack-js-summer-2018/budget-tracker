import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import styles from './Expense.css';

export class Expense extends Component {
  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object.isRequired,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = () => {
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { expense } = this.props;

    return (
      <li className={styles.expense}>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <ExpenseItem
            expense={expense}
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}
 
export default Expense;