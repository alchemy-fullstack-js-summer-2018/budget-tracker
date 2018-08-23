import { createStore } from 'redux';
import { reducer } from './components/Redux/reducers';

const store = createStore(reducer);

export default store;