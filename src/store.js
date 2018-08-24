import { createStore, combineReducers } from 'redux';
import { categories } from './components/Redux/reducers';
import { expensesByCategory } from './components/Redux/expensesByCategory';

const combined = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  categories,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;