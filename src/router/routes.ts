const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/repository',
    name: 'repository',
    component: () => import('@/views/repository.vue'),
    meta: {
      title: '代码仓库'
    }
  }
];
export default routes;
