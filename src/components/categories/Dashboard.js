import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load, add, update } from './actions';
import { getCategories } from './reducers';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
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
          <h2> Add A Budget Category: </h2>
          <CategoryForm onComplete={add}/>
        </section>

        {categories &&
          <section>
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
    categories: getCategories(state)
  }),
  { load, add }
)(Dashboard);