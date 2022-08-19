<script setup lang="ts">
defineProps<{ msg: string }>();
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <h1
      class="text-3xl font-bold underline"
      animate-bounce-alt
      animate-count-infinite
      animate-duration-1s
    >
      Hello UnoCSS!
    </h1>
    <a-button type="primary" @click="count++">count is {{ count }}</a-button>
    <p>
      Edit
      <code>components/DemoComponent.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
