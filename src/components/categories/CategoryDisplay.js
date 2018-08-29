import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './expenses/Expenses';
import styles from './CategoryDisplay.css';

class CategoryDisplay extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div className="cf-bullet">
        <section className={styles.categoryDisplay}>
          <strong>{category.name} Budget</strong>: ${category.budget}
          <button name="Edit" onClick={onEdit}>✎</button> 
          <button name="Delete" onClick={() => remove(category.key)}>🗑</button>
          
        </section>
        <Expenses categoryId={category.key}/>
        <section>

        </section>
      </div>
    );
  }
}

export default connect(
  null, 
  { remove }
)(CategoryDisplay);