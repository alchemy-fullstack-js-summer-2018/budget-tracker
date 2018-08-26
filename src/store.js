import { createStore, combineReducers } from 'redux';
import { categories } from './components/categories/reducers';
import { expenses } from './components/categories/expenses/ExpenseReducers';

const rootReducer = combineReducers({
  categories, 
  expenses
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;