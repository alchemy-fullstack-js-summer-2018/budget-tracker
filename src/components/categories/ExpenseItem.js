import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ExpenseItem extends Component {

static propTypes = {
  expense: PropTypes.object,
  onEdit: PropTypes.func
};

render() {
  const { expense } = this.props;

  return (
    <div>
      {expense.name} - {expense.price}
    </div>
  );
}
}

export default ExpenseItem;
