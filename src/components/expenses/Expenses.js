import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add } from './actions';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { getExpensesById } from './reducers';

class Expenses extends Component {
  
  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = (expense) => {
    const { categoryId, add } = this.props;
    
    add({ ...expense }, categoryId);
  };

  render() {
    const { expenses, categoryId } = this.props;

    return (
      <Fragment>
        <ul>
          <section>
            <ExpenseForm
              onComplete={this.handleAddExpense}
            />
          </section>

          {expenses.length &&
            <section>
              {expenses.map(expense => {
                return <Expense
                  key={expense.key}
                  expense={expense}
                  categoryId={categoryId}
                />;
              })
              }
            </section>
          }
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesById(state, categoryId)
  }),
  { add }
)(Expenses);