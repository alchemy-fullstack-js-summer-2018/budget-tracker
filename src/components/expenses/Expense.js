import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { update } from './actions';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';

class Expense extends Component {

    state = {
      editing: false
    };

    static propTypes = {
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
      this.handleEndEdit();
    };

    handleEndEdit = () => {
      this.setState({ editing: false });
    };

    render() {
      const { editing } = this.state;
      const { expense, categoryId } = this.props;

      return (
        <Fragment>
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
        </Fragment>
      );
    }
}

export default connect(
  null,
  { update }
)(Expense);