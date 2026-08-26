import { Camper } from "@/types/camper";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://goit.study",
});

interface FetchCamperResponse {
  camper: Camper[];
  totalPages: number;
}

export async function fetchNotes() {
  const { data } = await apiClient.get<FetchCamperResponse>("/camper");
  return data;
}
