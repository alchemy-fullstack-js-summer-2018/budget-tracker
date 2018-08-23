import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add } from './actions';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }
  
  render() { 
    const { categories, add } = this.props;

    return ( 
      <div>
        <section>
          <h3>Add a new category</h3>
          <CategoryForm onComplete={add}/>
        </section>

        {categories && 
          <section>
            <h3>Your Categories</h3>
            <Categories
              categories={categories}
            />
          </section>}
      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: state
  }),
  { load, add }
)(Dashboard);