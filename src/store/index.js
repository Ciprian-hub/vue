import {createStore} from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            data: []
        },
        questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea'],
        notification: {
            show: false,
            message: '',
            type: 'success',
        }
    },
    getters: {},
    actions: {
        getSurveys({commit}) {
            commit('setSurveysLoading', true)
            return axiosClient.get("/survey")
                .then((res) => {
                    commit('setSurveysLoading', false)
                    commit('setSurveys', res.data)
                })
        },

        deleteSurvey({ dispatch }, id) {
            return axiosClient.delete(`/survey/${id}`).then((res) => {
                dispatch('getSurveys')
                return res
            })
        },

        getSurvey ({commit}, id) {
            commit("setCurrentSurveyLoading", true)
            return axiosClient.get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data)
                    commit("setCurrentSurveyLoading", false)
                    return res
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false)
                    throw err
                })
        },

        saveSurvey({ commit, dispatch }, survey) {
            delete survey.image_url

            let response;
            if(survey.id){
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit('setCurrentSurvey', res.data)
                        return res
                    })
            } else {
                response = axiosClient
                    .post(`/survey`, survey)
                    .then((res) => {
                        commit('setCurrentSurvey', res.data)
                        return res
                    })
            }
        },

        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data.user)
                    commit('setToken', data.token)
                    return data
                })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data.user)
                    commit('setToken', data.token)
                    return data
            })
        },

        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response
                })
        }
    },
    mutations: {
        setSurveysLoading(state, loading) {
          state.surveys.loading = loading
        },
        setCurrentSurveyLoading(state, loading) {
            state.currentSurvey.loading = loading
        },
        setCurrentSurvey(state, survey) {
             state.currentSurvey.data = survey.data
        },
        setSurveys(state, surveys) {
            state.surveys.data = surveys.data
        },
        // saveSurvey(state, survey) {
        //     state.surveys = [...state.surveys, survey.data]
        // },
        // updateSurvey(state, survey) {
        //     state.surveys = state.surveys.map((sur) => {
        //         if(sur.id === survey.data.id) {
        //             return survey.data
        //         }
        //         return sur
        //     })
        // },
        logout: (state) => {
            state.user.data = {}
            state.user.token = null
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, user) => {
            state.user.data = user;
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        notify: (state, {message, type}) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false;
            },3000)
        }
    },
    modules: {},
})

export default store;