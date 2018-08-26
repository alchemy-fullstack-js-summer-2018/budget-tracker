import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  //TODO: flesh out state 
  state = {
    key: null,
    name: '',
    budget: 0
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { key, name, budget } = this.state;
    const category = { name, budget };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', budget: 0 });
  };
  
  render() { 
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Category name:<input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
        <label>Budget:<input type="number" name="budget" value={budget} onChange={this.handleChange}></input></label>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}
 
export default CategoryForm;