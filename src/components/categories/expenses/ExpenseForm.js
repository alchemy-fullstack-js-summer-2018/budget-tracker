import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    ediiting: false,
    categoryId: null,
    timestamp: new Date(),
    name: '',
    price:'',
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, timestamp, key } = this.state;
    const expense = { name, price, timestamp };
    if(key) expense.key = key;

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
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={price} onChange={this.handleChange}/>
        <p>
          <button className="add-update-button" type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p className="category-p">
    <label className="category-l">
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default ExpenseForm;