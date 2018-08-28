import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    editing: false,
    categoryId: null,
    id: null,
    name: '',
    amount: 0,
    timestamp: null
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRemove: PropTypes.func,
    categoryId: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;

    this.setState(expense);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, amount, id } = this.state;
    const expense = { name, amount };
    if(id) expense.id = id;

    this.props.onComplete(expense);
    this.setState({ name: '', amount: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, name, amount } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="amount" value={amount} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default ExpenseForm;