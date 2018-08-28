import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    editing: false,
    id: null,
    name: '',
    budget: '',
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
    const { name, budget, id, timestamp } = this.state;
    let category = { name, budget };
    if(id) category = { ...category, id, timestamp };

    this.props.onComplete(category)
      .then(() => {
        if(!this.props.category) this.setState({ name: '', budget: '' });
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
    const { id } = this.state;
    onRemove(id);
  };

  render() {
    const { id, name, budget } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={budget} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>Cancel</button>}
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