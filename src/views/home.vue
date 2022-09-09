<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore();
const router = useRouter();

let name = ref<string>(userStore.userName);

const welcomeMsg = computed(() => {
  return `Hello, ${name.value}`;
});

const jumpToRepos = () => router.push('/repository');
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
  <DemoComponent :msg="welcomeMsg" />
  <a-input
    v-model:value="name"
    placeholder="你是谁？"
    style="width: 200px"
  ></a-input>
  <hr />
  <a-button @click="jumpToRepos">跳转到仓库列表页</a-button>
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
