import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() {
    const { category, onEdit } = this.props;
    
    return (
      <section>
        <p>
          {category.name}
        </p>
        <p>
          {category.budget}
        </p>
        <button name="edit" onClick={onEdit}>Edit</button>
      </section>
    );
  }
} 

export default connect(
  null,
)(CategoryItem);