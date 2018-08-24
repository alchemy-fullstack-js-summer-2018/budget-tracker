import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

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

  render() {
    const { key, name, budget } = this.state;
    const { onCancel } = this.props;

    return (
      <Fragment>
        <h2>I am Category Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Category:<input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
          <label>Amount:<input type="number" name="budget" value={budget} onChange={this.handleChange}></input></label>
          <section>
            <button type="submit">{ key ? 'Update' : 'Add' }</button>
            {key && <button type="button" onClick={onCancel}>Cancel</button>}
          </section>
        </form>
      </Fragment>
    );
  }
}

export default CategoryForm;
