import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './categories/Categories';
import CategoryForm from './categories/CategoryForm';
import { load, add } from './categories/actions';
import { getCategories } from './categories/reducers';
import styles from './Dashboard.css';

class Dashboard extends Component {

  state = {
    loading: false,
    error: null
  };

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });
    this.props.load()
      .then(err => {
        this.setState({ error: err.message });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { categories, add } = this.props;
    const { loading, error } = this.state;

    return (
      <div>
        <h2>Budget Dashboard</h2>
        <section>
          <h3>Add a category:</h3>
          <CategoryForm onComplete={add}/>
        </section>

        {(loading || error) &&
          <section className={styles.loading}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }

        {categories &&
          <section>
            <h3>Categories:</h3>
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
