import Grid from "components/grid";
import Price from "components/price";
import { Product } from "lib/shopify/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <figure className="overflow-hidden">
              {product.featuredImage?.url && (
                <img
                  src={product.featuredImage.url}
                  alt={product.title}
                  className="h-56 sm:h-64 md:h-80 lg:h-96 w-full object-cover hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              )}
            </figure>
            <div className="card-body gap-2">
              <h2 className="card-title text-base sm:text-lg font-bold line-clamp-2">
                {product.title}
              </h2>
              <div className="card-actions justify-end pt-2">
                <div className="badge badge-outline text-xs sm:text-sm">
                  <Price
                    amount={product.priceRange.maxVariantPrice.amount}
                    currencyCode={
                      product.priceRange.maxVariantPrice.currencyCode
                    }
                  />
                </div>
              </div>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
