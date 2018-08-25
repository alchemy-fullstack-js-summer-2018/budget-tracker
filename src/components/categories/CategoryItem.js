import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

export class CategoryItem extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };
  
  render() {
    const { category, onEdit, remove } = this.props;
    
    return (
      <section>
        <p>{category.name}</p>
        <p>{category.budget}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={() => remove(category.key)}>Delete</button>
      </section>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryItem);