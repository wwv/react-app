import { combineReducers } from 'redux';
import { reducer as userListReducer } from "./sagas/UserListSaga";
import { reducer as userReducer } from "./sagas/UserSaga";
import { reducer as aclReducer } from "./sagas/ACLSaga";

export const reducers = combineReducers({
    userListReducer,
    userReducer,
    aclReducer
})