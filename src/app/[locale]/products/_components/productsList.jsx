import { products } from "@/data/products";
import { useTranslations } from "next-intl";
import ProductCard from "./productCard";

export default function ProductsList({ locale }) {
const t = useTranslations("products.items");

  return (
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
      {products.map((product) => (
        <li
          key={product.path}
          className="h-full basis-[calc(50%-0.5rem)] md:basis-[calc((100%-3rem)/3)] lg:basis-[calc((100%-4.5rem)/4)]"
        >
          <ProductCard
            title={t(`${product.key}.title`)}
            description={t(`${product.key}.description`)}
            icon={product.icon}
            href={`/products/${product.path}`}
          />
        </li>
      ))}
    </ul>
  );
}