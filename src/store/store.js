import { createStore, combineReducers } from 'redux';
import { categories } from '../components/Categories/reducers/reducers';
import { expensesByCategory } from '../components/Expenses/reducers/expenseReducers';

const combined = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;