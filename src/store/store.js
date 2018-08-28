import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/categories/categoryReducers';
import { expenses } from '../components/categories/expenses/expenseReducers';
import { error, loading } from '../components/app/reducers';

const rootReducer = combineReducers({
  categories,
  expenses,
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