import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  state = {
    name: '',
    price: ''
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

  handleSubmit = event => {
    event.preventDefault();
    
    this.props.onComplete(this.state);
    this.setState({ name: '', price: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, price } = this.state;
    const { onCancel, expense } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="price" value={price} type="number" onChange={this.handleChange}/>
        <p>
          <button type="submit">{ expense ? 'Update' : 'Add' }</button>
          {expense && <button type="button" onClick={onCancel}>Cancel</button>}
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