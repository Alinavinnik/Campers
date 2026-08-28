export type Transmission = "automatic" | "manual";
export type Engine = "petrol" | "diesel" | "hybrid" | "electric";
export type Form = "alcove" | "panel van" | "integrated" | "semi integrated";
export type Amenity =
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

export type FetchCampersParams = {
  page?: number;
  perPage?: number;
  location?: string;
  form?: Form;
  engine?: Engine;
  transmission?: Transmission;
};


