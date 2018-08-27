import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { update } from './actions';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object,
    update: PropTypes.func.isRequired
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
    const { expense } = this.props;
    const { editing } = this.state;

    return (
      <div>
        <h6>Hello Expense!</h6>


        <li>
          {editing
            ? <ExpenseForm
              expense={expense}
              onCancel={this.handleEndEdit}
              onComplete={this.handleComplete}
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

export default connect(
  null,
  { update }
)(Expense);
