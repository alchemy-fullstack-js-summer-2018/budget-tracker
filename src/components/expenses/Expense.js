import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { update } from './actions';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

    state = {
      editing: false
    };

    static PropTypes = {
      expense: PropTypes.object,
      update: PropTypes.func,
      categoryId: PropTypes.string
    };

    handleEdit = () => {
      this.setState({ editing: true });
    };

    handleComplete = expense => {
      const { update } = this.props;

      update(expense);
      this.handleEdit();
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
  { update }
)(Expense);