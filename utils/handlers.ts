export function buildCatalogUrl(formData: FormData): string {
  const location = formData.get("location") as string | null;
  const form = formData.get("form") as string | null;
  const engine = formData.get("engine") as string | null;
  const transmission = formData.get("transmission") as string | null;

  const params = new URLSearchParams();
  if (location) params.set("location", location);
  if (form) params.set("form", form);
  if (engine) params.set("engine", engine);
  if (transmission) params.set("transmission", transmission);

  return `/catalog?${params.toString()}`;
}
