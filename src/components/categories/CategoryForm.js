import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    editing: false,
    key: null,
    name: '',
    budget: '',
    expenses: [],
    timestamp: null
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRemove: PropTypes.func
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, key, expenses } = this.state;
    let category = { name, budget, expenses };
    if(key) category.key = key;

    this.props.onComplete(category)
      .then(() => {
        if(!this.props.category) this.setState({ name: '', budget: 0 });
      });
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  componentDidMount() {
    const { category } = this.props;
    if(!category) return;
    this.setState(category);
  }

  onDelete = event => {
    event.preventDefault();
    const { onRemove } = this.props;
    const { key } = this.state;
    onRemove(key);
  };

  render() {
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={budget} type="number" onChange={this.handleChange}/>
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