import Vue from "vue";
import Vuex from "vuex";
import customers from "./models/customer"; 

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    customers: customers,
  },
  mutations: {
    remove_customer(state, index) {
      if (index > -1) {
        state.customers.splice(index, 1);
      }
    },
    add_customer(state, payload) {
      state.customers.push(payload);
    },
    edit_customer(state, payload) {
      state.customers = state.customers.map((i) => {
        if (i.Id == payload.Id) {
          return payload;
        }
        return i;
      });
    },
  },
  actions: {
    removeCustomer({ state, commit }, Id) {
      try {
        var index = state.customers
          .map((i) => {
            if (Id == i.Id) return true;
            return false;
          })
          .indexOf(true);

        if (index != -1) {
          commit("remove_customer", index);
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      }
    },
    addCustomer({ commit }, payload) {
      commit("add_customer", payload);
    },
    editCustomer({ commit }, payload) {
      commit("edit_customer", {
        Id: payload.Id,
        FirstName: payload.FirstName,
        LastName: payload.LastName,
        Country: payload.Country,
        Date: payload.Date,
        Gender: payload.Gender,
      });
    },
  },
});

export default store;
