import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { categories } from '../components/categories/reducers';
import { getExpenses } from '../components/expenses/reducers';
import { error, loading } from '../../src/components/app/reducers';
import promiseMiddleware from './promise-middleware';

const combined = combineReducers({
  categories,
  getExpenses,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;