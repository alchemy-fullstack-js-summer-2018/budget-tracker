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

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', budget: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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

const InputControl = props => (
  <p>
    <label>
      {props.name}:
      <input {...props} required />
    </label>
  </p>
);

export default CategoryForm;