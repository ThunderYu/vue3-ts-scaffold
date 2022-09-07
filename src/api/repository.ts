/**
 * 代码仓库相关接口
 */
import Request from '@/utils/request';

// 创建请求工具类实例
// 考虑到每个功能模块的路径前缀以及用于参数和返回数据处理的拦截器等配置可能不同，这里在每个模块的接口请求文件中都创建了新的工具类实例
// 如果多个模块的接口处理方式相同，可以将公用请求实例封装在api目录下
const http = new Request({
  baseURL: 'https://api.github.com'
});

/** 仓库所有者信息 */
interface RepoOwner {
  /** 登录账号 */
  login: string;
  /** 头像路径 */
  avatar_url: string;
}

/** 代码仓库信息 */
export interface Repository {
  /** 仓库名 */
  name: string;
  /** 仓库所有者信息 */
  owner: RepoOwner;
  /** 仓库页面地址 */
  html_url: string;
  /** 仓库描述信息 */
  description: string;
}

/**
 * 获取指定用户的所有仓库信息
 * @param username 用户名
 */
export function getUserRepos(username: string): Promise<Array<Repository>> {
  return http.get(`/users/${username}/repos`);
}
