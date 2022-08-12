import { acceptHMRUpdate } from 'pinia';

// TODO: 热更新，报错处理
const modules = import.meta.glob('./modules/*.ts');
for (const path in modules) {
  modules[path]().then((mod) => {
    Object.values(mod).forEach((item) => {
      if (import.meta.hot) {
        import.meta.hot.accept(acceptHMRUpdate(item, import.meta.hot));
      }
    });
  });
}
