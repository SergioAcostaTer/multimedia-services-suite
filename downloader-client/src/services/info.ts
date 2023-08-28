import axios, { AxiosResponse } from "axios";
import { Item } from "../types";

export default async function videoInfo(id: string): Promise<Item> {
  const response: AxiosResponse<Item> = await axios.get(
    `https://downloader-back.onrender.com/video/${id}`
  );
  return response.data;
}
