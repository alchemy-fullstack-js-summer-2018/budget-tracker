import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expenses from '../expenses/ExpensesByCategory';
import { remove } from '../category-actions';


class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;
    const { name, budget, id } = category;

    return (
      <p>
        {name}: ${budget}
        <button name="edit" onClick={onEdit}><i className="fas fa-pen"></i></button>
        <button name="delete" onClick={() => remove(category.key)}><i className="fas fa-ban"></i>
        </button>
        <Expenses categoryID={id}/>
      </p>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);