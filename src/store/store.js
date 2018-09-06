import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/categories/reducers';
import { error, loading } from '../components/app/reducers';
import { expensesByCategory } from '../components/expenses/reducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware
    )
  )
);

export default store;