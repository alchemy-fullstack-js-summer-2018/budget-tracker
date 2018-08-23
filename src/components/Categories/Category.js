import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';
//TODO: update -- don't forget to connect

class Category extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired
  };
  
  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() { 
    const { category } = this.props;
    const { editing } = this.state;
    
    return (
      <li style={{ color: 'green' }}>
        <h4>Category Component</h4>

        {editing
          ? <CategoryForm
            category={category}
            onCancel={this.handleEndEdit}
          />
          : <CategoryItem 
            category={category}
          />
        }
      </li>
    );
  }
}
 
export default connect(
  null
)(Category);