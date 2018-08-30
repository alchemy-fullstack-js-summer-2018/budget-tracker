import { createStore, combineReducers, applyMiddleware, compose }  from 'redux';
import { categories } from '../components/categories/reducers';
import { expensesByCategory } from '../components/expenses/reducers';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';

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
