import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedCards:[]
        },
        mutations: {
            setCards(state, cards) {
                state.loadedCards = cards
            }
        },
        actions: {
            setCards(vuexContext, cards) {
                vuexContext.commit('setCards', cards)
            }
        },
        getters: {
            loadedCards(state) {
                return state.loadedCards
            }
        }
    })
}
export default createStore;
