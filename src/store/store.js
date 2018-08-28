import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/Categories/reducers/reducers';
import { expensesByCategory } from '../components/Expenses/reducers/expenseReducers';
import { error, loading } from '../components/App/reducers';

const combined = combineReducers({
  categories,
  expensesByCategory,
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