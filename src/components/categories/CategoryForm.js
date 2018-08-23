import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CategoryForm extends Component {

  state = {
    key: null,
    name: '',
    budget: '',
    timestamp: new Date().toLocaleString(),
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
    const { key, name, budget, timestamp } = this.state;
    const category = { name, budget, timestamp };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', budget: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
            Category Name:&nbsp;
              <input name="name" value={name} onChange={this.handleChange}></input>
            </label>
          </p>
          <p>
            <label>
            Budgeted Amount:&nbsp;
              <input name="budget" value={budget} type="number" onChange={this.handleChange}></input>
            </label>
          </p>
          <p>
            <button type="submit">{ key ? 'Update' : 'Add' }</button>
            {key && <button type="button" onClick={onCancel}>Cancel</button>}
          </p>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
