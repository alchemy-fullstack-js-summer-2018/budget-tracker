import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryDisplay from './CategoryDisplay';
import CategoryForm from './CategoryForm';
import { update } from './actions';

class Category extends Component {
  
  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = category => {
    const { update } = this.props;
    update(category);
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { category } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
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
  { update }
)(Category);