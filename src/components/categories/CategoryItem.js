import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from '../expenses/Expenses';

class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() { 
    const { category, onEdit, remove } = this.props;
    
    return ( 
      <div>
        <section>
          <strong>{category.name}</strong> budget is <strong>${category.budget}</strong>
          <button name="edit" onClick={onEdit}>✎</button>
          <button name="delete" onClick={() => remove(category.id)}>🗑</button>
        </section>

        <section>
          <Expenses categoryId={category.key}/> 
        </section>
      </div>
      
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryDisplay);