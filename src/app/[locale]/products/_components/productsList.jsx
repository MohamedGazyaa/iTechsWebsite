import { products } from "@/data/products";
import ProductCard from "./productCard";

export default function ProductsList({ locale }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      {products.map((product) => (
        <li key={product.path} className="h-full">
          <ProductCard
            title={product.title[locale]}
            icon={product.icon}
            href={`/products/${product.path}`}
          />
        </li>
      ))}
    </ul>
  );
}
