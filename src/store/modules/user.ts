import { defineStore, acceptHMRUpdate } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: 'Harry Potter'
  })
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
