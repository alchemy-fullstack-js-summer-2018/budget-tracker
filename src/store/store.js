import { createStore, combineReducers } from 'redux';
import { categories } from '../components/categories/reducers';
import { getExpenses } from '../components/expenses/reducers';
import { error, loading } from '../../src/components/app/reducers';

const combined = combineReducers({
  categories,
  getExpenses,
  error,
  loading
});

const store = createStore(
  combined, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;