import Vuex from 'vuex'
import {GoogleProvider} from '@/firebase/init.js'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedCards:[],
            user: null,
            username: null,
            token: null
        },
        mutations: {
            setCards(state, cards) {
                state.loadedCards = cards
            },
            setUser (state, payload) {
                state.user = payload
            },
            setUsername (state, payload) {
                state.username = payload
            },
            setToken( state, token ) {
                state.token = token
            }
        },
        actions: {
            setCards(vuexContext, cards) {
                vuexContext.commit('setCards', cards)
            },

            autoSignIn ({commit}, payload) {
                commit('setUser', payload)
            },

            signInWithGoogle ({commit}) {
                return new Promise((resolve, reject) => {
                  auth.signInWithRedirect(GoogleProvider)
                  resolve()
                })
              },

              signOut ({commit}) {
                auth.signOut().then(() => {
                  commit('setUser', null)
                }).catch(err => console.log(error))
              },

              authenticateUser(vuexContext, authData) {
                let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIKey

                        if(!authData.isLogin) {
                           authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBbO5Fv3fd1nKYmCZp0-LjiSjk-yM6FAag'
                        } 
                        // if we return the axios post this allows us to use a then block in our signup() method
                         return axios.post( authUrl,
                            { email: authData.email,
                            password: authData.password,
                            returnSecureToken: true
                            }
                            ).then( (result) => {
                                // we are storing the token recieved from firebases API into state.token
                                console.log(result)
                                vuexContext.commit('setToken', result.data.idToken)
                            }).catch((err) => {
                                console.log(err)
                            }); 
              }
        },
        getters: {
            loadedCards(state) {
                return state.loadedCards
            },

            activeUser: (state, getters) => {
                return state.user
            }
        }
    })
}
export default createStore;
