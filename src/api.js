import axios from 'axios';

const rootPath = '/api/';

function resolveRoute(route, params) {
    return rootPath + route.replace(/({\S+})/g, (match, p) => params[p])
}

export default class Api {
    static fetch(route, params) {
        return axios.get(resolveRoute(route, params)).then(response => new Promise(resolve => setTimeout(() => resolve(response), 2000)))
    }

    static save(route, params) {
        return axios.post(resolveRoute(route, params))
    }
}