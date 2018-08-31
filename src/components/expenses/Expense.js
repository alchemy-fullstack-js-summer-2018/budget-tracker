import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import { updateExpense } from './actions';

class Expense extends Component {

  state = {
    editing: false
  };
  
  static propTypes = {
    expense: PropTypes.object,
    updateExpense: PropTypes.func,
    categoryId: PropTypes.string
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };
  
  handleComplete = expense => {
    const { updateExpense } = this.props;
    updateExpense(expense);
    this.handleEndEdit();
  };
  
  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  
  render() { 
    const { editing } = this.state;
    const { expense, categoryId } = this.props;

    return (
      <li>
        {editing  
          ? <ExpenseForm 
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
            categoryId={categoryId}
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
 
export default connect(
  null,
  { updateExpense }
)(Expense);