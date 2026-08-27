import { FetchCamperResponse } from "@/types/camper";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://goit.study",
});

export async function fetchCampers() {
  const { data } = await apiClient.get<FetchCamperResponse>("/camper");
  return data;
}
