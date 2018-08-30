import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class ExpenseForm extends Component {

    state= {
      id: null,
      name: '',
      amount: 0
    };

    static PropTypes = {
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

    handleSubmit = (event) => {
      event.preventDefault();
      const { onComplete } = this.props;

      onComplete(this.state);
      this.setState({ name: '', amount: 0 });
    };

    render() {
      const { id, name, amount } = this.state;
      const { onCancel } = this.props;

      return (
        <form onSubmit={this.handleSubmit}>
          <label>Expense:<input type="text" name="name" value= {name} onChange={this.handleChange}></input></label>
          <label>Amount:<input type="number" name="amount" value= {amount} onChange={this.handleChange}></input></label>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>X</button>}
        </form>
      );
    }
}

export default ExpenseForm;