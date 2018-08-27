import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../Expenses/Expenses';
import { connect } from 'react-redux';
import { remove } from '../reducers/actions';

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
        <section className="category-item">
          <button name="edit" onClick={onEdit}>✏️</button>&nbsp;
          <button name="delete" onClick={() => remove(category.key)}>🗑️</button>&nbsp;
          <strong>{category.name}</strong><span className="budget">Budget: {category.budget}</span>
        </section>

        <section>
          <Expenses categoryId={category.id}/>
        </section>
      </div>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryItem);