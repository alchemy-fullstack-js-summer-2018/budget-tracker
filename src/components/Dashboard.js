import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './categories/Categories';
import CategoryForm from './categories/CategoryForm';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array
  };



  



  render() {

    const { categories } = this.props;

    return (
      <div>
        <h2>Hello Dashboard!</h2>
        <section>
          <h3>Add a budget category:</h3>
          <CategoryForm/>
        </section>
        {categories &&
          <section>
            <Categories/>
          </section>
        }
      </div>
    );
  }
}

export default Dashboard;
