import {call, put, takeLatest} from 'redux-saga/effects'
import api from "../api";

export const ACL_LIST_REQUEST = 'ACL_LIST_REQUEST';
export const ACL_LIST_SUCCESS = 'ACL_LIST_SUCCESS';
export const ACL_LIST_FAILURE = 'ACL_LIST_FAILURE';

export const initialState = {
    data: {}
}

export function* fetchWatcher() {
    yield takeLatest(ACL_LIST_REQUEST, function* () {
        try {
            const response = yield call(api.fetch, 'access-levels.json');
            yield put({type: ACL_LIST_SUCCESS, data: response.data});
        } catch (error) {
            yield put({type: ACL_LIST_FAILURE, error});
        }
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ACL_LIST_REQUEST:
            return {...state, fetching: true, data: {}, error: null};
        case ACL_LIST_SUCCESS:
            return {...state, fetching: false, data: action.data};
        case ACL_LIST_FAILURE:
            return {...state, fetching: false, data: {}, error: 'Невозможно загрузить список полномочий: ' + action.error.message};
        default:
            return state;
    }
}