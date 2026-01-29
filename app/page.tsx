import { HeroSection } from "components/hero-section";
import Footer from "components/layout/footer";
import ProductGridItems from "components/layout/product-grid-items";
import { getProducts } from "lib/shopify";

export const metadata = {
  description:
    "CheapWatchStore - Premium watches at affordable prices. Shop our collection of luxury watches from top brands.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const allProducts = await getProducts({});

  return (
    <>
      {/* Animated Hero */}
      <HeroSection />

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Our Collection</h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse our curated selection
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductGridItems products={allProducts} />
        </div>
      </section>

      <Footer />
    </>
  );
}
