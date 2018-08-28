import { createStore, combineReducers } from 'redux';
import { categories } from '../components/category-reducers';
import { expenses } from '../components/expensesByCategory-reducers';

const combinedReducer = combineReducers({
  categories, 
  expenses
});

const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;