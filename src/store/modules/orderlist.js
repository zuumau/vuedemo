import Vue from 'vue'
const state = {
  orderList: [],
  params: {}
}

const getters = {
  getOrderList: state => state.orderList
  // orderList: function (state) {
  //   return state.orderList
  // }
}

const actions = {
  fetchOrderList ({ commit, state }) {
    Vue.http.post('/api/getOrderList', state.params)
      .then((res) => {
        commit('updateOrderList', res.data.list)
        // state.orderlist = res.data.list
        // state.total = res.data.total
      }, (errMsg) => {
        console.log('err')
      })
  }
}

const mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
