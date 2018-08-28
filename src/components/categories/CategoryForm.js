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
    const category = { name, budget, timestamp }
;
    if(key) category.key = key;

    const { onComplete, category: originalCategory } = this.props;

    onComplete(category)
      .then(() => {
        if(!originalCategory) {
          this.setState({ name: '', budget: null });
          document.activeElement.blur();
        }
      })
      .catch(err => {
        this.setState({ error: err });
      });
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
        <InputControl name="budget" value={budget} onChange={this.handleChange}/>
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