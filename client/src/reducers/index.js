//combine reducers from redux

import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });
