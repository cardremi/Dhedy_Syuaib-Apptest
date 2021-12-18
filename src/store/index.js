import {createStore} from 'redux';
import reducer from '../config/Reducer';

const store = createStore(reducer);

export default store;
