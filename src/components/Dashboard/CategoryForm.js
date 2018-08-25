import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    editing: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, key } = this.state;
    const category = { name, budget };
    if(key) name.key = key;

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
      
      <form onSubmit={this.handleSubmit}>
        <InputControl name="Category" value={name} onChange={this.handleChange}/>
        <InputControl name="Amount" value={budget} onChange={this.handleChange}/>
        <section>
          <button type="submit">{ key ? 'Update' : 'Add To Budget' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </section>
      </form>
    
    );
  }
}

const InputControl  = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default CategoryForm;