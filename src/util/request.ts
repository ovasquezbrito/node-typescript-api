import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from 'process';

/* eslint-disable @typescript-eslint/no-empty-iterface */
export interface RequestConfig extends AxiosRequestConfig {}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response<T = any> extends AxiosResponse<T> {}

export class Request {
  constructor(private request = axios) {}
  /**
   * get
   */
  public get<T>(url: string, config: RequestConfig = {}): Promise<Response<T>> {
    return this.request.get<T, Response<T>>(url, config);
  }

  /**
   * static
   */
  public static isRequestError(error: AxiosError): boolean {
    return !!(error.response && error.response.status);
  }
}
