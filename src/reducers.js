import { combineReducers } from 'redux';
import { reducer as userListReducer } from "./sagas/UserListSaga";
import { reducer as userReducer } from "./sagas/UserSaga";

export const reducers = combineReducers({
    userListReducer,
    userReducer
})