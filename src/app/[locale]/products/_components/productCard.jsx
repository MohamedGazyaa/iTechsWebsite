import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function ProductCard({ title, icon, href }) {
  return (
    <Link
      href={href}
      className="h-full flex flex-col items-center justify-start gap-3 p-4"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
        <Image
          src={icon}
          alt={title}
          width={112}
          height={112}
          className="object-contain w-full h-full"
        />
      </div>

      <h3 className="text-itechsBlue font-semibold text-center uppercase tracking-wide text-xs md:text-sm line-clamp-3 leading-tight min-h-14">
        {title}
      </h3>
    </Link>
  );
}
