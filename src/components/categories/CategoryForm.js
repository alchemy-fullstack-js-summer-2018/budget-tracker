import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = { 
    editing: false,
    key: null,
    timestamp: new Date(), 
    name: '',
    budget: 0
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, type, key } = this.state;
    const category = { name, type };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', type: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="Name" value={name} onChange={this.handleChange}/>
        <InputControl name="Budget" value={budget} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
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
