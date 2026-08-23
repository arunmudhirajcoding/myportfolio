"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

const COLORS = [
  "#0ea5e9",
  "#737373",
  "#14b8a6",
  "#22c55e",
  "#3b82f6",
  "#ef4444",
  "#eab308",
];

export const FollowerPointerCard = ({
  children,
  className,
  title,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef(null);

  const [isInside, setIsInside] = useState(false);
  const [color] = useState(
    () => COLORS[Math.floor(Math.random() * COLORS.length)]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ cursor: "none" }}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer
            x={x}
            y={y}
            title={title}
            color={color}
          />
        )}
      </AnimatePresence>

      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  color,
}) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 pointer-events-none"
      style={{
        top: y,
        left: x,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        viewBox="0 0 16 16"
        className="-translate-x-[12px] -translate-y-[10px] -rotate-[70deg] h-6 w-6 text-sky-500 stroke-sky-600"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>

      <motion.div
        className="min-w-max whitespace-nowrap rounded-full px-2 py-2 text-xs text-white"
        style={{
          backgroundColor: color,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
      >
        {title || "William Shakespeare"}
      </motion.div>
    </motion.div>
  );
};