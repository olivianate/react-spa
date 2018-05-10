import { combineReducers } from 'redux';
import header from './modules/common.header/reducer';

const store = combineReducers({
    header,
});

export default store;