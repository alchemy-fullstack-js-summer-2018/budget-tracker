import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    key: null,
    name: '',
    timeEntered: new Date(),
    budget: ''
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired
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
    const { name, budget, key } = this.state;
    const category = { name, budget };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', budget: '' });
  };

  render() { 
    const { key, name, budget } = this.state;

    return ( 
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={budget} onChange={this.handleChange}/>
        <p>
          <button type="submit">{key ? 'Update' : 'Add' }</button>
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