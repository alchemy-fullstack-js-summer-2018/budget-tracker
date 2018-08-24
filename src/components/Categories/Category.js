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
    const { editing } = this.state;
    const { category } = this.props;
    
    return (
      <li style={{  border: '2px solid red' }}>

        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <CategoryItem 
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