import LoginService from '@/services/services/loginServices.js';
import qs from 'qs'
import axios from 'axios'

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
        console.log("Mutation User: " + localStorage.getItem('user'))
        axios.defaults.headers.common['Authorization'] = userData.token

        console.log("Mutation header:" + axios.defaults.headers.common['Authorization'])
    },
    CLEAR_USER_DATA() {
        localStorage.removeItem('user')
        location.reload()
    }
}


export const actions = {
    login({ commit }, credentials) {
        return LoginService
            .Login(credentials)
            .then((response) => {
                console.log("Actions: " + response.data.userName)
                commit('SET_USER_DATA', response.data)
            })
    },
    logout({ commit }) {
        commit('CLEAR_USER_DATA')
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