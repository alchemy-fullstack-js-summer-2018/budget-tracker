import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/category-reducers';
import { expensesByCategory } from '../components/expensesByCategory-reducers';
import { error, loading } from '../components/app/app-reducers';

const combinedReducer = combineReducers({
  categories, 
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;