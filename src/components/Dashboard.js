import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './categories/Categories';
import CategoryForm from './categories/CategoryForm';
import { load, add } from './category-actions';
import Expenses from './expenses/Expenses';
import ExpenseForm from './expenses/ExpenseForm';
import { add as addExpense } from './expenses-actions';

class Dashboard extends Component {

    static propTypes = {
      categories: PropTypes.array,
      expenses: PropTypes.array,
      load: PropTypes.func.isRequired,
      add: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.load();
    }

    render() {
      const { expenses, categories, add } = this.props;

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
              />
            </section>  
          }
        
          <section>
            <h3>Add an Expense</h3>
            <ExpenseForm onComplete={addExpense}/>
          </section>

          {expenses &&
            <section>
              <h3>Expenses</h3>
              <Expenses
                expenses={expenses}
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
)(Dashboard);