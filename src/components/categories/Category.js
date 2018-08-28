import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryDisplay from './CategoryDisplay';
import CategoryForm from './CategoryForm';
import { update, remove } from '../category-actions';

class Category extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete =  category => {
    const { update } = this.props;
    return update(category)
      .then (() => this.handleEndEdit());
  };

  handleRemove =  id => {
    const { remove } = this.props;
    return remove(id)
      .then (() => this.handleEndEdit());
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { category } = this.props;

    return (
      <li>
        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onRemove={this.handleRemove}
            onCancel={this.handleEndEdit}
          />
          : <CategoryDisplay
            category={category}
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}

export default connect(
  null,
  { update, remove }
)(Category);