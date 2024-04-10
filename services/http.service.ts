import { EHttpMethod } from "@/types";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HttpService {
  private http: AxiosInstance;
  private baseURL = process.env.NEXT_PUBLIC_BASE_URL;


  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Handle HTTP requests
  private async request<T> (
    method: EHttpMethod,
    url: string,
    options: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async post<T, P> (
    url: string,
    payload: P,
    params?: {}
  ): Promise<T> {
    return this.request<T>(EHttpMethod.POST, url, {
      params,
      data: payload,
    });
  }
}

export { HttpService as default };