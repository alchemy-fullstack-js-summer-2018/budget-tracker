import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add, update } from './actions';

class CategoriesContainer extends Component {
  
  static propTypes = { 
    categories: PropTypes.array,
    load: PropTypes.func,
    add: PropTypes.func
  };

  componentDidMount() {
    this.props.load();
  }

  render() { 
    const { categories, add } = this.props;
    
    return (
      <div>
        <section>
          <h3>Add a Category</h3>
          <CategoryForm onComplete={add}/>
        </section>

        {categories && 
          <section>
            <h3>Categories</h3>
            <Categories 
              categories={categories}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: state
  }),
  { load, add }
)(CategoriesContainer);