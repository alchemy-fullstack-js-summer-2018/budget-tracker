import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    key: null,
    name: '',
    timeEntered: new Date(),
    amount: ''
  };

  static propTypes = {
    // expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    // onCancel: PropTypes.func
  };

  // componentDidMount() {
  //   const { expense } = this.props;
  //   if(!expense) return;

  //   this.setState(expense);
  // }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, amount, key } = this.state;
    const expense = { name, amount };
    if(key) expense.key = key;

    this.props.onComplete(expense);
    this.setState({ name: '', amount: '' });
  };

  render() { 
    const { key, name, amount } = this.state;
    // const { onCancel } = this.props;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="amount" value={amount} onChange={this.handleChange}/>
        <p>
          <button type="submit">{key ? 'Update' : 'Add' }</button>
          {/* {key && <button type="button" onClick={onCancel}>Cancel</button>} */}
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