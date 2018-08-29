import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';
class CategoryForm extends Component {

  state = {
    key: null,
    name: '',
    budget: 0,
    expenses: [],
    timestamp: null,
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
    const { key, name, budget, expenses } = this.state;
    const category = { name, budget, expenses };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', budget: 0 });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;


    return (
      <div>
        <form className={styles.categoryForm} onSubmit={this.handleSubmit}>
          <label>
            Category Name:&nbsp;
            <input name="name" value={name} onChange={this.handleChange}></input>
          </label>
          <br/>
          <label>
            Budgeted Amount:&nbsp;
            <input name="budget" value={budget} type="number" onChange={this.handleChange}></input>
          </label>

          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
      </div>
    );
  }
}

export default CategoryForm;
