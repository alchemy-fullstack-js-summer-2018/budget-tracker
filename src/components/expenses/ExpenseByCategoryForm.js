import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './ExpenseForm.css';

class ExpenseForm extends Component {

  state = {
    editing: false,
    name: '',
    amount: 0
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRemove: PropTypes.func,
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', budget: 0 });
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;
    this.setState(expense);
  }

  onDelete = event => {
    event.preventDefault();
    const { onRemove } = this.props;
    onRemove(this.state);
  };

  render() { 
    const { name, amount } = this.state;
    const { onCancel, expense } = this.props;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <p>Add a New Expense to this Category</p>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="amount" value={amount} onChange={this.handleChange} type="number"/>
        <p>
          <button type="submit">{expense ? 'Update' : 'Add' }</button>
          {expense && <button type="button" onClick={onCancel}>Cancel</button>}
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