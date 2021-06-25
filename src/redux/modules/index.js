import { combineReducers } from 'redux';
import user from './user';

import { penderReducer } from 'redux-pender';

export default combineReducers({
    user,
    pender: penderReducer
});