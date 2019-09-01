import {call, put, takeLatest} from 'redux-saga/effects'
import api from "../api";

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE';

export const initialState = {
    data: []
}

export function* fetchWatcher() {
    yield takeLatest(USER_LIST_REQUEST, function* () {
        try {
            const response = yield call(api.fetch, 'user-list.json');
            yield put({type: USER_LIST_SUCCESS, data: response.data});
        } catch (error) {
            yield put({type: USER_LIST_FAILURE, error});
        }
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {...state, fetching: true, error: null};
        case USER_LIST_SUCCESS:
            return {...state, fetching: false, data: action.data};
        case USER_LIST_FAILURE:
            return {...state, fetching: false, data: null, error: action.error.message};
        default:
            return state;
    }
}



