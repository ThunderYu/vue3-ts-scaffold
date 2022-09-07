import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors {
  /** 请求拦截方法 */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  /** 响应拦截方法 */
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  /** 拦截器配置对象 */
  interceptors?: RequestInterceptors;
}
