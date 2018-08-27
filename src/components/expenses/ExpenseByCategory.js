import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesDisplay from './ExpensesByCategoryDisplay';
import ExpenseForm from './ExpenseByCategoryForm';
import { update } from '../expensesByCategory-actions';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete =  expense => {
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
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <ExpensesDisplay
            expense={expense}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        }
      </li>
    );
  }
}

export default connect(
  null,
  { update }
)(Expense);