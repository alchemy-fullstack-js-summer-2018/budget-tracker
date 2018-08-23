import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {

  state = {
    key: null,
    category: ''
  }

  static propTypes = {
    category: PropTypes.object
  }

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { key, category } = this.state;

    return ( 
      <form>
        <input name="category" value={category} onChange={this.handleChange}/>
        <p>
          <button type="submit">{key ? 'Update' : 'Add' }</button>
        </p>
      </form>
    );
  }
}

// const InputControl = (props) => (
//   <p>
//     <label>
//       {props.category}:
//       <input {...props} required/>
//     </label>
//   </p>
// );
 
export default CategoryForm;