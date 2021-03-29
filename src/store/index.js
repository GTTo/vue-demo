import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

const usersModule = {
    state: {
        users: []
    },
    getters: {
        users: state => {
            return state.users;
        }
    },
    mutations: {
        setUsers (state, users) {
            state.users = users
        }
    },
    actions: {
        getUsers({commit}) {
            axios
                .get('https://jsonplaceholder.typicode.com/users', {
                    headers: {
                    }
                })
                .then(response => response.data)
                .then(items => {
                    console.log(items);
                commit('SET_Items', items)
            })
        }
    }
}

const romanCounterModule = {
    state: {
        counter: 0
    },
    getters :{
        romanCounter(state) {
            return romanize(state.counter);
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    },
    actions: {
        incrementAsync({commit}) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    }
}


const store = new Vuex.Store({
    modules: {
        romanCounterModule: romanCounterModule,
        usersModule: usersModule
    }
  })


//from stackoverflow
function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

export default store;