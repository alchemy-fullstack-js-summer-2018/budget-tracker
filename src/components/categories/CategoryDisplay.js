import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../category-actions';


class CategoryDisplay extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;
    const { name, budget } = category;

    return (
      <p>
        {name}: ${budget}
        <button name="edit" onClick={onEdit}><i className="fas fa-pen"></i></button>
        <button name="delete" onClick={() => remove(category.id)}><i className="fas fa-ban"></i>
        </button>
        
      </p>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);