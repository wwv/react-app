import { all } from 'redux-saga/effects';
import { fetchWatcher as userListFetchWatcher } from './UserListSaga';

export default function* rootSaga() {
    yield all([
        userListFetchWatcher()
    ]);
}