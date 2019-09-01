import {call, put, takeLatest} from 'redux-saga/effects'
import api from "../api";

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const initialState = {
    data: {
        userId: '',
        name: '',
        email: '',
        phone: '',
        acls: []
    }
}

/**
 * Стандартная связка редакс-саги
 * В воркер передается userId в составе payload
 * @returns {IterableIterator<SimpleEffect<"FORK", ForkEffectDescriptor>>}
 */
export function* fetchWatcher() {
    yield takeLatest(USER_REQUEST, function* (action) {
        const userId = action.payload.userId;
        try {
            const response = yield call(api.fetch, 'user/{userId}.json', {userId});
            yield put({type: USER_SUCCESS, data: {...response.data, userId}});
        } catch (error) {
            yield put({type: USER_FAILURE, error});
        }
    });
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {...state, fetching: true, data: {userId: action.payload.userId}, error: null};
        case USER_SUCCESS:
            return {...state, fetching: false, data: action.data};
        case USER_FAILURE:
            return {...state, fetching: false, error: 'Невозможно загрузить карточку пользователя: ' + action.error.message};
        default:
            return state;
    }
}