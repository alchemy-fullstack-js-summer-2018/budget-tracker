import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpenses } from './expensesReducer';

class Expenses extends Component {
  static propTypes = {
    expenses: PropTypes.array.isRequired
  };

  render() {

    return (
      <ul>
      </ul>
    );
  }
}
 
export default connect(
  state => ({
    expenses: getExpenses(state)
  }),
  null
)(Expenses);