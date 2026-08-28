import BookForm from "@/components/BookForm/BookForm";
import CatalogDetaleItem from "@/components/Catalog/CatalogDetale/CatalogDetaleItem";
interface DetalePageProps {
  params: Promise<{ camperId: string }>;
}

export default async function DetalePage({ params }: DetalePageProps) {
  const { camperId } = await params;

  return (
    <section>
      <div className="container">
        <CatalogDetaleItem camperId={camperId} />
        <BookForm camperId={camperId} />
      </div>
    </section>
  );
}
