import LoginService from '@/services/services/Services.js';
import qs from 'qs'

export const namespaced = true

export const state = {
    user: null,
    isLogin: false,
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3
}

export const mutations = {
    SET_USER_DATA(state, userData) {
        console.log("Mutation Enter")
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        console.log("User: "+ localStorage.getItem('user'))
        axios.defaults.headers.common['Authorization'] = `Bearer ${
            userData.token
            }`

        console.log("header:"+ axios.defaults.headers)
    },
    SET_EVENT(state, event) {
        state.event = event
    }
}


export const actions = {
    login({ commit }, credentials) {
        return LoginService
            .Login(credentials)
            .then((response) => {
                console.log(response.data)
                commit('SET_USER_DATA', response.data)
            })
    }


}


export const getters = {
    loggedIn(state) {
        return !!state.user
    },
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}