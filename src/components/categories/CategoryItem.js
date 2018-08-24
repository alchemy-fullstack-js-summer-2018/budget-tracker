import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from '../expenses/Expenses';
// import styles from './CategoryItem.css';

class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div>
        <p><strong>Category:</strong>{category.name}</p>
        <p><strong>Budget:</strong> ${category.budget}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(category.key)}>🗑</button>

        <section>
          <Expenses/>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryItem);
