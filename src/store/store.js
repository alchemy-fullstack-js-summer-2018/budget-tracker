import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/categories/reducers';
import { expensesByCategory } from '../components/categories/expenses/reducers';
import { error, loading } from '../components/app/reducers';

const rootReducer = combineReducers({
  categories,
  error,
  loading,
  expensesByCategory
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