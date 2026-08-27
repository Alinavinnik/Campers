import {
  BookingRequestBody,
  FetchCamperResponse,
  FetchCampersParams,
} from "@/types/camper";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export async function fetchCampers({
  page = 1,
  perPage = 4,
  location,
  form,
  engine,
  transmission,
}: FetchCampersParams) {
  const { data } = await apiClient.get<FetchCamperResponse>("/campers", {
    params: {
      page,
      perPage,
      location,
      form,
      engine,
      transmission,
    },
  });

  return data;
}

export async function createBook(
  camperId: string,
  bookingData: BookingRequestBody,
) {
  const { data } = await apiClient.post(
    `/campers/${camperId}/booking-request`,
    bookingData,
  );
  return data;
}
