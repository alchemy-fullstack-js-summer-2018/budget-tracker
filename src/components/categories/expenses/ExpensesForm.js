import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {

  state = {
    id: null,
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { onComplete } = this.props;

    onComplete(this.state);
    this.setState({ name: '', price: 0 });
  };
  
  render() { 
    const { id, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Expense name:<input type="text" name="name" value={name} placeholder="Name of expense..." onChange={this.handleChange}></input></label>
        <label>Price:<input type="number" name="price" value={price} placeholder="price" onChange={this.handleChange}></input></label>
        <button type="submit" className="form-button">{ id ? 'Update' : 'Add' }</button>
        {id && <button type="button" className="form-button" onClick={onCancel}>Cancel</button>}
      </form>
    );
  }
}
 
export default ExpensesForm;