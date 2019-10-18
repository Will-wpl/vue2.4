import { settings } from '../../services/ApiSettings'
import axios from 'axios'
import qs from 'qs'

const apiClient = axios.create({
    baseURL: settings.baseURL,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getToken() {
        return apiClient.get('/values/login')
    },
    Login(credentials) {
        return axios.post(settings.baseURL + '/values/login', qs.stringify(credentials))
        // return apiClient.post('/values/Login' + qs.stringify(credentials))
    },
    PureLogin(credentials) {
        return axios.post(settings.baseURL + '/values/LoginPostTest', qs.stringify(credentials))
    }
}
