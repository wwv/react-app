import { all } from 'redux-saga/effects';
import { fetchWatcher as userListFetchWatcher } from './UserListSaga';
import { fetchWatcher as userFetchWatcher } from './UserSaga';

export default function* rootSaga() {
    yield all([
        userListFetchWatcher(),
        userFetchWatcher()
    ]);
}