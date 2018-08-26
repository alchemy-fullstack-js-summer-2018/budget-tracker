import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  state = {
    editing: false,
    key: null,
    name: '',
    price: ''
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  handleSubmit = event => {
    event.preventDefault();
    const { key, name, price } = this.state;
    const expense = { name, price };
    if(key) expense.key = key;

    this.props.onComplete(expense);
    this.setState({ key: null, name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="price" value={price} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = props => (
  <p>
    <label>
      {props.name}:
      <input {...props} required />
    </label>
  </p>
);
 
export default ExpenseForm;