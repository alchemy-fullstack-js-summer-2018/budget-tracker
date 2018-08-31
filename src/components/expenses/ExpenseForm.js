import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    key: null,
    categoryId: '',
    name: '',
    price: '',
    timestamp: null
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    categoryId: PropTypes.string,
    
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;
    this.setState(expense);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { categoryId } = this.props;
    // this.setState({ categoryKey: categoryId });
    const { key, name, price, timestamp } = this.state;
    const expense = { key, name, categoryId, price, timestamp };
    
    if(key) expense.key = key;
    if(!key) expense.categoryId = categoryId;
    
    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
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
 
export default ExpenseForm;
