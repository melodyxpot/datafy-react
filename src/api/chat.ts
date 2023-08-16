import { AxiosError, AxiosResponse } from "axios";
import api from "utils/api";

export const chat = async () => {
  try {
    api.post(`/chat`);
  } catch (err: any) {}
};

export const getChats = async (id: string) => {
  try {
    const response: AxiosResponse = await api.get(`/chat?convers_id=${id}`);
    return response.data;
  } catch (err) {
    console.error(`Chats GET ERR :=> ${err}`);
  }
};
