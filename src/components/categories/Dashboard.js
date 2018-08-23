import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load } from './actions';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }
  
  render() { 
    return ( 
      <div>
        <section>
          <h3>Add a new category</h3>
          {/* <CategoryForm/> */}
        </section>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: state
  }),
  { load }
)(Dashboard);