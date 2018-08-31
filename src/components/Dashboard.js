import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './categories/Categories';
import CategoryForm from './categories/CategoryForm';
import { load, add } from './category-actions';


class Dashboard extends Component {

    static propTypes = {
      expenses: PropTypes.array,
      load: PropTypes.func.isRequired,
      add: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.load();
    }

    render() {
      const { add } = this.props;

      return (
        <div>
          <section>
            <h3>Add a Category</h3>
            <CategoryForm onComplete={add}/>
          </section>

          <section>
            <h3>Available Categories</h3>
            <Categories />
          </section>      
        
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