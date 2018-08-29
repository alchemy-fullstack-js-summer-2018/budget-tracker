import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { update } from './actions';
import styles from './Expense.css';

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
        <div className={styles.expense}>
          {editing
            ? <ExpenseForm
              expense={expense}
              onCancel={this.handleEndEdit}
              onComplete={this.handleComplete}
            />
            : <div>
              <ExpenseItem
                expense={expense}
                onEdit={this.handleEdit}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { update }
)(Expense);
