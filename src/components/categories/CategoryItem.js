import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from '../expenses/Expenses';
import styles from './CategoryItem.css';

class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div className={styles.categoryItem}>
        <section>
          <span className="category">
            {category.name}  Budget: ${category.budget}
          </span>
          <span className="buttons">
            <button name="edit" onClick={onEdit}>✏️</button>
            <button name="delete" onClick={() => remove(category.key)}>❌</button>
          </span>
        </section>

        <section>
          <Expenses categoryKey={category.key}/>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryItem);
