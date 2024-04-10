import { IPrompt } from "@/models";
import HttpService from "./http.service";

const http = new HttpService();

export async function postPrompt<T extends IPrompt> (data: T) {
  console.log({ axiosPost: Object.assign(data, { model: 'model changed' }) })
  // return http.post('', Object.assign(data, { model: '' }))
}
