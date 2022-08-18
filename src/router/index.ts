import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import routes from './routes';

// 根据环境变量配置确定当前使用哪种路由模式
const history =
  import.meta.env.VITE_ROUTER_HISTORY === 'hash'
    ? createWebHashHistory()
    : createWebHistory();

const router = createRouter({
  history,
  routes
});

export default router;
