import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import CategoryForm from './CategoryForm';
import { connect } from 'react-redux';
import Categories from './Categories';
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

    const { categories } = this.props;

    return (
      <div>
        <h2>Dashboard</h2>

        {categories && 
          <section> 
            <Categories/>
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
  { load }
)(Dashboard);