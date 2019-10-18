import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo uno'
        },
        {
            id: 2,
            title: 'Towo two'
        },
        {
            id: 3,
            title: 'Pakaonon daw og ice cream'
        },
        {
            id: 4,
            title: 'Pero wala'
        }
    ]
}

const getters = {
    getTodos: state => state.todos
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations,
}