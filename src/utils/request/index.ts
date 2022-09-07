import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { RequestConfig, RequestInterceptors } from './types';

export default class Request {
  /** axios实例 */
  instance: AxiosInstance;
  /** 拦截器配置对象 */
  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    // 注册全局请求拦截器
    this.instance.interceptors.request.use(
      (res) => {
        // console.log('全局请求拦截器');
        return res;
      },
      (err) => err
    );

    // 注册实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    // 注册实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // 注册全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应拦截器');
        return res.data;
      },
      (err) => err
    );
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 调用接口请求拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 调用接口响应拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T>(url: string, params?: object, config?: RequestConfig): Promise<T> {
    return this.request({
      url,
      method: 'get',
      params,
      ...config
    });
  }

  post<T>(url: string, data?: object, config?: RequestConfig): Promise<T> {
    return this.request({
      url,
      method: 'post',
      data,
      ...config
    });
  }

  put<T>(url: string, data?: object, config?: RequestConfig): Promise<T> {
    return this.request({
      url,
      method: 'put',
      data,
      ...config
    });
  }

  patch<T>(url: string, data?: object, config?: RequestConfig): Promise<T> {
    return this.request({
      url,
      method: 'patch',
      data,
      ...config
    });
  }

  delete<T>(url: string, params?: object, config?: RequestConfig): Promise<T> {
    return this.request({
      url,
      method: 'delete',
      params,
      ...config
    });
  }
}
