import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    restaurants: []
  },
  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
    }
  },
  actions: {
    async fetchRestaurants({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/restaurants');
        commit('setRestaurants', response.data);
      } catch (error) {
        console.error("An error occurred while fetching the restaurant data:", error);
      }
    }
  },
  getters: {
    restaurants: state => state.restaurants
  }
});
