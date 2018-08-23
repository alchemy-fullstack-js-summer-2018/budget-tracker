import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';
import { update } from '../Redux/actions';

class Category extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };
  
  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  handleComplete = category => {
    const { update } = this.props;
    update(category);
    this.handleEndEdit;
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  // handleDelete = key => {
  //   this.setState({ });
  // };

  render() { 
    const { category } = this.props;
    const { editing } = this.state;
    
    return (
      <li style={{ color: 'green' }}>

        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <CategoryItem 
            category={category}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
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