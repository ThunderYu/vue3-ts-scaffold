<template>
  <a-list item-layout="horizontal" :data-source="repos" :loading="loading">
    <template #header>
      <a-button @click="router.back()">返回</a-button>
    </template>
    <template #renderItem="{ item: repo }">
      <a-list-item>
        <a-list-item-meta :description="repo.description">
          <template #title>
            <a :href="repo.html_url">{{ repo.name }}</a>
          </template>
          <template #avatar>
            <a-avatar :src="repo.owner.avatar_url" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
import { getUserRepos, Repository } from '@/api/repository';

let repos: Ref<Array<Repository>> = ref([]);
let loading = ref(true);
onMounted(() => {
  getUserRepos('bpmn-io').then((repositories) => {
    loading.value = false;
    repos.value = repositories;
  });
});

const router = useRouter();
</script>
