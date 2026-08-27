type Transmission = "automatic" | "manual";
type Engine = "petrol" | "diesel" | "hybrid" | "electric";
type Form = "alcove" | "panel van" | "integrated" | "semi integrated";
type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water"
  | "tv";
export interface GalleryItem {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: Form;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
  gallery?: GalleryItem[];
}

export interface FetchCamperResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface FiltersResponse {
  forms: Form;
  transmissions: Transmission;
  engines: Engine;
}

export type FetchCampersParams = {
  page: number;
  location?: string;
  form?: string;
  engine?: string;
  transmission?: string;
};

export type BookingRequestBody = {
  name: string;
  email: string;
};
