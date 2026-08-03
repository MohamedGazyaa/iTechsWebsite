import { products } from "@/data/products";
import ProductCard from "./productCard";

export default function ProductsList({ locale }) {
  return (
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
      {products.map((product) => (
        <li
          key={product.path}
          className="h-full basis-[calc(50%-0.5rem)] md:basis-[calc((100%-3rem)/3)] lg:basis-[calc((100%-4.5rem)/4)]"
        >
          <ProductCard
            title={product.title[locale]}
            description={product.description[locale]}
            icon={product.icon}
            href={`/products/${product.path}`}
          />
        </li>
      ))}
    </ul>
  );
}