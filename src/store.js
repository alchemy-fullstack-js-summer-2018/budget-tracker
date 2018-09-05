import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './store/promise-middleware';
import { error, loading } from './components/AppReducers';
import { categories } from './components/categories/reducers';
import { expensesByCategory } from './components/categories/expenses/ExpenseReducers';

const rootReducer = combineReducers({
  categories, 
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;