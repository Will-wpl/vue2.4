import LoginService from '@/services/services/loginServices.js';

export const namespaced = true

export const state = {
    isLogin: false,
    events: [],
    eventsTotal: 0,
    event: {},
    perPage: 3
}

export const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event)
    },
    SET_EVENTS(state, events) {
        state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
        state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
        state.event = event
    }
}


export const actions = {
    createEvent({ commit, dispatch }, event) {
        return LoginService.get()
            .then(() => {
                commit('ADD_EVENT', event)
                commit('SET_EVENT', event)
                const notification = {
                    type: 'success',
                    message: 'Your event has been created!'
                }
                dispatch('notification/add', notification, { root: true })
            })
            .catch(error => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating your event: ' + error.message
                }
                dispatch('notification/add', notification, { root: true })
                throw error
            })
    }


}


export const getters = {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }