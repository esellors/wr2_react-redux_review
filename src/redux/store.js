import { createStore } from 'redux';
import countReducer from './reducers/countReducer';

export default createStore(countReducer);