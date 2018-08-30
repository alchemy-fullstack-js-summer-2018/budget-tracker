import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import styles from './Categories.css';

class Categories extends Component {

  state = {
    loading: false,
    error: null
  };

  static propTypes = {
    categories: PropTypes.array
  };

  render() {
    const { categories } = this.props;
    return (
      <ul className={styles.categories}>
        {categories.map(category => (
          <Category
            key={category.key}
            category={category}
          />
        ))}
      </ul>
    );
  }
}

export default Categories;
