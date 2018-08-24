import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expenses from './Expenses';
import ExpenseForm from './ExpenseForm';
import { load, add, update } from '../actions';

class ExpensesContainer extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { expenses, add } = this.props;

    return (
      <div>
        <section>
          <h3>Add a Expense</h3>
          <ExpenseForm onComplete={add}/>
        </section>

        {expenses && 
          <section>
            <h3>Expenses</h3>
            <Expenses 
              expenses={expenses}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}
 

export default connect(
  state => ({
    expenses: state
  }),
  { load, add }
)(ExpensesContainer);