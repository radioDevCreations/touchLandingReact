import { combineReducers } from 'redux';

import { navbarReducer } from './navbarReducer';

export const rootReducer = combineReducers({
    navbar: navbarReducer
});