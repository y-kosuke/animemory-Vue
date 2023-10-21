// Utilities
import { createPinia } from 'pinia';
import axios from 'axios';
import { defineStore } from 'pinia';

const apiurl = 'http://localhost:3000';
//状態を管理するデータを定義する
export const useEventStore = defineStore("event", {
  //初期状態
  state: () => ({
    events: []
  }),
  //状態取得
  getters: {
    getEvents: (state) =>
      state.events
  },
  //状態更新
  actions: {
    async fetchEvents() {
      const response = await axios.get(`${apiurl}/events`);
      this.events = response.data
    },
  },
})

export default createPinia()
