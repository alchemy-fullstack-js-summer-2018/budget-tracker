import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    key: null,
    name: '',
    budget: ''
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // const { key } = this.state;
    // const category = { name, budget, };
    // const { category } = this.state;
    // category.expenses = this.props.category.expenses;
    // category.timeStamp = this.props.category.timeStamp;
    // if(key) category.key = key;

    this.props.onComplete(this.state);
    this.setState({ name: '', budget: '' });
  };

  render() { 
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={budget} onChange={this.handleChange}/>
        <p>
          <button type="submit">{key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
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
 
export default CategoryForm;