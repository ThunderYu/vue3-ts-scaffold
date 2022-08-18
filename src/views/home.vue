<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
const msg = computed(() => {
  return `Hello, ${userStore.userName}`;
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="msg" />
</template>

<style scoped>
.logo {
  padding: 1.5em;
  height: 6em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
