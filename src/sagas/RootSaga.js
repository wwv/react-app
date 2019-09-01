import { all } from 'redux-saga/effects';
import { fetchWatcher as userListFetchWatcher } from './UserListSaga';
import { fetchWatcher as userFetchWatcher } from './UserSaga';
import { fetchWatcher as aclFetchWatcher } from './ACLSaga';

export default function* rootSaga() {
    yield all([
        userListFetchWatcher(),
        userFetchWatcher(),
        aclFetchWatcher()
    ]);
}