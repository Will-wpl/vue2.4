import {settings} from '../../services/ApiSettings';
import axios from 'axios'

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
    getEvent(id) {
      return apiClient.get('/events/' + id)
    }
  }