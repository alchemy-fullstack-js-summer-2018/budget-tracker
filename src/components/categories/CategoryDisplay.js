import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

export class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };
  render() { 
    const { category, remove, onEdit } = this.props;
    return (
      <div>
        <p>
          Category: {category.name}
        </p>
        <p>Budget: {category.budget}</p>
        <p>Created: {category.timeStamp}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(category.key)}>❌</button>
      </div>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryDisplay);