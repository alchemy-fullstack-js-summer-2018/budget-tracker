import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import styles from './Categories.css';


export class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array
  };

  render() {
    const { categories } =  this.props;
    if(!categories) return null;

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