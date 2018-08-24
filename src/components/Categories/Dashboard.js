import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load, add, update } from '../reducers/actions';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import styles from './Categories.css';
import { getCategories } from '../reducers/reducers';

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
      <div className={styles.categories}>

        <section>
          <h3>Add a Category:</h3>
          <CategoryForm onComplete={add}/>
        </section>

        {categories &&
          <section>
            <h3>Your Budget:</h3>
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