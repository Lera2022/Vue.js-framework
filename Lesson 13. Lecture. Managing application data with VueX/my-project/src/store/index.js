import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({


    state: {
        paymentsList: [],
        // начальное состояние
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        // методы для изменения состояния
    },
    actions: {
        // методы для асинхронных операций
        fetchData({ commit }) {
            setTimeout(() => {
                const paymentsList = [{
                    date: '28.03.2020',
                    category: 'Food',
                    value: 169,
                },
                {
                    date: '24.03.2020',
                    category: 'Transport',
                    value: 360,
                },
                {
                    date: '24.03.2020',
                    category: 'Food',
                    value: 532,
                },
                ];
                commit('SET_PAYMENT', paymentsList);
            }, 1000);
        }

    },
    getters: {
        // методы для чтения состояния
        // получаем список paymentsList
        getPaymentsList: state => state.paymentsList,
        // получаем суммарную стоимость всех платежей
        getFullPaymentValue: state => {
            return state.paymentsList
                .reduce((res, cur) => res + cur.value, 0)
            12
        },

    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }
});