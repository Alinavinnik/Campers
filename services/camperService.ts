import { FetchCamperResponse } from "@/types/camper";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function fetchCampers() {
  const { data } = await apiClient.get<FetchCamperResponse>("/campers");
  return data;
}
