import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    id: null,
    timestamp:
    name: '',
    budget: number
  };



static propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func.isRequired
};

componentDidMount() {
  const { category } = this.props;
  if(!category) return;

  this.setState(category);
}

handleSubmit = (event) => {
  event.preventDefault();
  const { id, timestamp, name, budget}
}