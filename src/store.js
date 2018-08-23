import { createStore } from 'redux';
import { categories } from './components/Redux/reducers';

const store = createStore(categories);

export default store;