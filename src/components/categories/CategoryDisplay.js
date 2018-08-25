import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <p>
        {category.name} allowed {category.budget}
        <button name="edit" onClick={onEdit}>✎</button>
        <button id="delbtn" name="delete" onClick={() => remove(category.key)}>🗑</button>     
      </p>
    );
  }
}

export default connect (
  null,
  { remove }
)(CategoryDisplay);