import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add } from './actions';
import { getCategories } from './reducers';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    add: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    // remove: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.load();
  }

  handleComplete = (category) => {
    const { add } = this.props;
    return add(category);
  };

  render() {
    const { categories } = this.props;
    // if(!categories) return null;

    return (
      <div>
        <section>
          <h3>Add an Category</h3>
          <CategoryForm onComplete={this.handleComplete}/>
        </section>

        {categories && 
          <section>
            <h3>Budget Categories</h3>
            <Categories
              categories={categories}
            />
          </section>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: getCategories(state)
  }),
  { load, add }
)(Dashboard);