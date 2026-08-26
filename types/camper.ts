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
  amenities: Amenity;
  coverImage: string;
  totalReviews: number;
}
