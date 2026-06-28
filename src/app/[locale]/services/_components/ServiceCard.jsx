"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import CardTooltip from "./CardTooltip";

export default function ServiceCard({ title, description, icon, href }) {
  const t = useTranslations("servicesPage");
  const [isOpen, setIsOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const tooltipRef = useRef(null);
  const tooltipId = `tooltip-${href.replace(/\//g, "-")}`;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e) {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div
      className="relative h-full flex flex-col items-center justify-start cursor-pointer"
      onPointerEnter={() => { if (canHover) setIsOpen(true); }}
      onPointerLeave={() => { if (canHover) setIsOpen(false); }}
    >
      <Link href={href} className="block w-full p-4 cursor-pointer">
        <div className="flex flex-col items-center gap-3">

          {/* Icon container — relative so tooltip anchors to its bottom-end corner */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0">
            <Image
              src={icon}
              alt={title}
              width={112}
              height={112}
              className="object-contain w-full h-full"
            />

            <CardTooltip
              ref={tooltipRef}
              id={tooltipId}
              isOpen={isOpen}
              title={title}
              description={description}
            />
          </div>

          <h3 className="text-itechsBlue font-semibold text-center uppercase tracking-wide text-xs md:text-sm min-h-10 flex items-center justify-center">
            {title}
          </h3>
        </div>
      </Link>

      {/* Info button — mobile only; desktop uses card hover */}
      <button
        type="button"
        className="absolute top-2 inset-e-2 z-10 rounded-full border border-itechsTeal bg-itechsSkyBlue w-5 h-5 p-0 flex items-center justify-center md:hidden"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-label={t("moreInfoAriaLabel", { title })}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? tooltipId : undefined}
      >
        <span className="text-itechsTeal text-xs font-bold leading-none select-none">i</span>
      </button>
    </div>
  );
}
