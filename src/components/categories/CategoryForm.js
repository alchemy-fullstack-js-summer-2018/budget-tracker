import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';


class CategoryForm extends Component {

  state = {
    editing: false,
    key: null,
    name: '',
    budget: '',
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
    if(key) category.key = key;

    const { onComplete, category: originalCategory } = this.props;

    onComplete(category)
      .then(() => {
        if(!originalCategory) {
          this.setState({ name: '', budget: '' });
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
      <form className={styles.categoryForm} onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="budget" value={budget} type="number" onChange={this.handleChange}/>
        <p>
          <button className="add-update-button" type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p className="category-p">
    <label className="category-l">
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default CategoryForm;