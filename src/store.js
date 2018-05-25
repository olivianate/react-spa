import { combineReducers } from 'redux';
import header from './modules/common.header/reducer';
import requirement from './modules/page.req.manage/reducer';

const store = combineReducers({
  header,
  requirement,
});

export default store;