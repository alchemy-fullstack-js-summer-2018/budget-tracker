import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './expenses/Expenses';

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
        <section className="cf-list">
          {category.name} has a budget of ${category.budget}
          <button name="Edit" onClick={onEdit}>✎</button> 
          <button name="Delete" onClick={() => remove(category.key)}>🗑</button>
          
        </section>
        <Expenses categoryId={category.id}/>
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