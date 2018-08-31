import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesDisplay from './ExpensesByCategoryDisplay';
import ExpenseForm from './ExpenseByCategoryForm';
import { update, remove  } from '../expensesByCategory-actions';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
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
    const { expense } = this.props;
    const { editing } = this.state;
    

    return (
      <li>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onRemove={this.handleRemove}
            onCancel={this.handleEndEdit}
          />
          : <ExpensesDisplay
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
  { update, remove }
)(Expense);