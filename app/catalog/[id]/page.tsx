import BookForm from "@/components/BookForm/BookForm";
import CatalogDetaleItem from "@/components/Catalog/CatalogDetale/CatalogDetaleItem";
interface DetalePageProps {
  params: Promise<{ id: string }>;
}

export default async function DetalePage({ params }: DetalePageProps) {
  const { id } = await params;

  return (
    <section>
      <div className="container">
        <CatalogDetaleItem camperId={id} />
        <BookForm camperId={id} />
      </div>
    </section>
  );
}
