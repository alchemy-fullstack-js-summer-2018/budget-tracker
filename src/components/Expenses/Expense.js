import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpensesForm from './ExpensesForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

  state = {
    editing: false
  };
  
  static propTypes = {
    expense: PropTypes.object
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };
  
  handleComplete = expense => {
    const { update } = this.props;
    update(expense);
    this.handleEndEdit();
  };
  
  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  
  render() { 
    const { editing } = this.state;
    const { expense } = this.props;

    return (
      <li>
        {editing  
          ? <ExpensesForm 
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