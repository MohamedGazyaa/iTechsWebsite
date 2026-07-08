import { forwardRef } from "react";

const placementClass = {
  center: "start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
  start: "start-0",
  end: "end-0",
};

const CardTooltip = forwardRef(function CardTooltip({ id, isOpen, placement = "center", title, description }, ref) {
  return (
    <div
      ref={ref}
      id={id}
      role="tooltip"
      className={`absolute top-full ${placementClass[placement]} z-30 transition-opacity duration-200 ${
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
