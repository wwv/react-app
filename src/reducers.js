import { combineReducers } from 'redux';
import { reducer as userListReducer } from "./sagas/UserListSaga";

export const reducers = combineReducers({
    userListReducer
})