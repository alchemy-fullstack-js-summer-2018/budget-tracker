import { createStore, combineReducers } from 'redux';
import { categories } from './components/reducers/reducers';
import { expenses, expensesByCategory } from './components/reducers/expenseReducers';

const combined = combineReducers({
  categories,
  expenses
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;