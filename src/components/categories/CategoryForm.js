import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    key: null,
    name: '',
    editing: false
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, key } = this.state;
    const category = { name };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div>
        <h3>Hello CategoryForm!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Category Name:&nbsp;
            <input name="Name" value={name} onChange={this.handleChange}></input>
          </label>
          <p>
            <button type="submit">Add</button>
          </p>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
