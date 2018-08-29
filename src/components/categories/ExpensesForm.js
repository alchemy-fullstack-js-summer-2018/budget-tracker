import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {

  state = {
    key: null,
    categoryId: null,
    name: '',
    price: 0
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    categoryId: PropTypes.string
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;

    this.setState(expense);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { key, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:<input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
        <label>Price:<input type="number" name="price" value={price} onChange={this.handleChange}></input></label>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

export default ExpensesForm;