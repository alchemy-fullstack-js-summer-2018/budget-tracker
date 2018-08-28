import { createStore, combineReducers } from 'redux';
import { categories } from './components/categories/reducers';
import { expenses } from './components/expenses/reducersExpenses';

const combined = combineReducers({
  categories,
  expenses
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;