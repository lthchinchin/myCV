import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        countVuex: 0,
        myInfo: {
            name: 'Le Trung Hieu',
            intro: 'I wanna become a good developer.',
            dayOfBirth: 18 / 10 / 1999,
            contact: { phone: "0857629564", email: "letrunghieu5612@gmail.com", },
            myProject: [{ name: "abc", url: "sadsad" }, { name: "sdsd", url: "sadsad" }, { name: "asd", url: "asd" }]
        },
        navItemList: [
            { class: "mdi mdi-home", href: "home" },
            { class: "mdi mdi-account", href: "about" },
            { class: "mdi mdi-face-agent", href: "services" },
            { class: "mdi mdi-briefcase-variant", href: "portfolio" },
            { class: "mdi mdi-forum", href: "blog" },
            { class: "mdi mdi-account-box", href: "contact" },
        ],
    },
    getters: {
        getNavItemList(state) {
            return state.navItemList
        },
        getMyName(state) {
            return state.myInfo.name
        },
        getMyIntro(state) {
            return state.myInfo.intro
        }
    },
    mutations: {
        increment(state) {
            state.countVuex++
        }
    }
})

export default store