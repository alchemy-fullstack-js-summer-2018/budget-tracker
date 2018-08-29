import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    id: null,
    categoryId: '',
    name: '',
    price: '',
    timestamp: null
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    categoryKey: PropTypes.string,
    
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

    const { categoryKey } = this.props;
    this.setState({ categoryId: categoryKey });
  
    const { id, categoryId, name, price, timestamp } = this.state;
    const expense = { id, name, categoryId, price, timestamp };
    
    if(id) expense.id = id;
    if(!id) expense.categoryId = categoryKey;

    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
  };
  
  render() { 
    const { id, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:<input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
        <label>Price:<input type="number" name="price" value={price} onChange={this.handleChange}></input></label>
        <p>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}
 
export default ExpenseForm;
