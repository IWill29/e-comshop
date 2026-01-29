"use client";

import Link from "next/link";
import React from "react";

export function AnimatedButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(70deg);
          }
          50% {
            transform: rotate(100deg);
          }
          100% {
            transform: rotate(70deg);
          }
        }

        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
          animation: rotate 4s ease-in-out infinite;
        }
      `}</style>
      <Link
        href={href}
        className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 inline-flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
      >
        <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-black/80 backdrop-blur hover:bg-black/90 transition">
          {children}
        </button>
      </Link>
    </>
  );
}
