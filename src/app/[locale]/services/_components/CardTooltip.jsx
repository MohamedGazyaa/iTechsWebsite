import { forwardRef } from "react";

const CardTooltip = forwardRef(function CardTooltip({ id, isOpen, title, description }, ref) {
  return (
    <div
      ref={ref}
      id={id}
      role="tooltip"
      className={`absolute top-full inset-s-1/2 z-30 transition-opacity duration-200 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
    >
      <div className="bg-itechsBlue text-white p-5 rounded-xl shadow-xl w-64 md:w-72">
        <p className="font-bold text-lg md:text-xl mb-2">{title}</p>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
});

export default CardTooltip;
