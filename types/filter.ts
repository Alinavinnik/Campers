import type { Engine, Form, Transmission } from "./camper";

export interface FiltersResponse {
  forms: Form[];
  transmissions: Transmission[];
  engines: Engine[];
}
