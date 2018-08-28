import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category';
import { load } from '../category-actions';
import { getCategories } from '../category-reducers';

class Categories extends Component {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { categories } = this.props;
    if(!categories) return;

    return (
      <ul>
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
      </ul>
    );
  }
}

export default connect(
  state => ({ categories: getCategories(state) }),
  { load }
)(Categories);