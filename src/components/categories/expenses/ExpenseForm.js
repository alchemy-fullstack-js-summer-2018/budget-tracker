import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    id: null,
    name: '',
    timeEntered: new Date(),
    amount: ''
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;

    this.setState(expense);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, amount, id } = this.state;
    const { categoryId } = this.props.expense;
    const expense = { name, amount, categoryId };
    if(id) expense.id = id;

    this.props.onComplete(expense);
    this.setState({ name: '', amount: '' });
  };

  render() { 
    const { id, name, amount } = this.state;
    const { onCancel } = this.props;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="amount" value={amount} onChange={this.handleChange}/>
        <p>
          <button type="submit">{id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>Cancel</button>}
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