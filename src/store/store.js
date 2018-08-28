import { createStore, combineReducers } from 'redux';
import { categories } from '../components/categories/categoryReducers';
import { expenses } from '../components/categories/expenses/expenseReducers';

const combinedReducers = combineReducers({
  expenses,
  categories
});

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;