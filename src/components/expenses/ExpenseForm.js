import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseForm.css';

export default class ExpenseForm extends Component {

  state = {
    key: '',
    categoryId: '',
    name: '',
    price: '',
    timestamp: null
  };

  static propTypes = {
    expense: PropTypes.object,
    categoryKey: PropTypes.string,
    onCancel: PropTypes.func,
    onComplete: PropTypes.func
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;
    this.setState(expense);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { categoryKey } = this.props;
    this.setState({ categoryId: categoryKey });
    const { key, categoryId, name, price, timestamp } = this.state;
    const expense = { key, name, categoryId, price, timestamp };
    if(key) expense.key = key;
    if(!key) expense.categoryId = categoryKey;
    
    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() {
    const { key, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={styles.expenseForm} onSubmit={this.handleSubmit}>
        <p>{ key ? 'Update expense' : 'Create a new expense' }:</p>
        <label>
          <input name="name" value={name} placeholder="Expense name..." onChange={this.handleChange}></input>
        </label>
        <label>
          <input name="price" value={price} placeholder="Expense amount..." type="number" onChange={this.handleChange}></input>
        </label>
        <button type="submit">{ key ? 'Update' : 'Add' }</button>
        {key && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}
