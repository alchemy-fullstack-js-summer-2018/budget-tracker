import { createStore, combineReducers } from 'redux';
import { categories } from '../components/categories/reducers';
import { getExpenses } from '../components/expenses/reducers';

const combined = combineReducers({
  categories,
  getExpenses
});

const store = createStore(
  combined, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;