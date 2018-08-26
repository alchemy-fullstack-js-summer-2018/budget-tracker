import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesByCategoryId } from './expensesReducer';

class Expenses extends Component {
  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired
  };

  render() {

    return (
      <ul>
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  null
)(Expenses);