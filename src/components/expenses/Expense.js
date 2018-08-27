import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';

export default class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  // handleComplete = category => {
  //   const { update } = this.props;
  //   update(category);
  //   this.handleEndEdit();
  // };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { expense, onEdit } = this.props;
    const { editing } = this.state;

    return (
      <div>
        <h6>Hello Expense!</h6>


        <li>
          {editing
            ? <ExpenseForm
              expense={expense}
              onCancel={this.handleEndEdit}
            />
            : <ExpenseItem
              expense={expense}
              onEdit={this.handleEdit}
            />
          }
        </li>
      </div>
    );
  }
}
