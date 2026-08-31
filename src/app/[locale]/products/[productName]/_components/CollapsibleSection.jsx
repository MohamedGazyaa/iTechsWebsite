"use client";

import { useState } from "react";

export default function CollapsibleSection({
  title,
  titleClassName,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-2 sm:pointer-events-none sm:cursor-default"
        aria-expanded={open}
      >
        <h2 className={titleClassName}>{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 text-itechsBlue transition-transform sm:hidden ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={`${open ? "block" : "hidden"} sm:block`}>{children}</div>
    </div>
  );
}
