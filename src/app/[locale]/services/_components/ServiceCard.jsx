"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import CardTooltip from "./CardTooltip";

export default function ServiceCard({ title, description, icon, href }) {
  const t = useTranslations("servicesPage");
  const [isOpen, setIsOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [placement, setPlacement] = useState("center");
  const tooltipRef = useRef(null);
  const iconRef = useRef(null);
  const cardRef = useRef(null);
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
      if (cardRef.current && !cardRef.current.contains(e.target)) {
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

  useLayoutEffect(() => {
    if (!isOpen || !iconRef.current || !tooltipRef.current) return;
    const iconRect = iconRef.current.getBoundingClientRect();
    const tooltipWidth = tooltipRef.current.offsetWidth;
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const margin = 8;
    const centeredLeft = iconCenterX - tooltipWidth / 2;
    const centeredRight = iconCenterX + tooltipWidth / 2;
    let next;
    if (centeredRight > window.innerWidth - margin) next = "end";
    else if (centeredLeft < margin) next = "start";
    else next = "center";
    setPlacement((prev) => (prev === next ? prev : next));
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className="relative h-full flex flex-col items-center justify-start cursor-pointer"
      onPointerEnter={() => { if (canHover) setIsOpen(true); }}
      onPointerLeave={() => { if (canHover) setIsOpen(false); }}
    >
      <Link href={href} className="block w-full p-4 cursor-pointer">
        <div className="flex flex-col items-center gap-3">

          {/* Icon container */}
          <div
            ref={iconRef}
            className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0"
          >
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
              placement={placement}
              title={title}
              description={description}
            />
          </div>

          <h3 className="text-itechsBlue font-semibold text-center uppercase tracking-wide text-xs md:text-sm line-clamp-3 leading-tight min-h-14">
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
