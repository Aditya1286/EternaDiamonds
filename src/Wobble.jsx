'use client'; // Remove if not using Next.js App Router

import React from 'react';
import { WobbleCard } from './components/ui/wobble-card';

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto w-full">
      {/* CARD 1 — Craftsmanship (Spans 2 columns on lg) */}
      <WobbleCard
        containerClassName="
          col-span-1 md:col-span-2 lg:col-span-2
          bg-amber-900
          min-h-[280px] sm:min-h-[320px] lg:min-h-[300px]
          rounded-2xl shadow-xl overflow-hidden
        "
      >
        <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col justify-center">
          <h2 className="
            text-left font-bold tracking-tight text-white
            text-lg sm:text-xl md:text-2xl lg:text-3xl
          ">
            Masterful Craftsmanship, Timeless Brilliance
          </h2>
          <p className="
            mt-3 sm:mt-4 text-left text-neutral-200
            text-sm sm:text-base lg:text-lg
          ">
            Every Eterna diamond is handcrafted by skilled artisans using precision
            techniques that bring unmatched sparkle and elegance.
          </p>
        </div>
      </WobbleCard>

      {/* CARD 2 — Ethical Sourcing */}
      <WobbleCard
        containerClassName="
          col-span-1
          bg-green-900
          min-h-[280px] sm:min-h-[300px]
          rounded-2xl shadow-xl overflow-hidden
        "
      >
        <div className="p-5 sm:p-6 h-full flex flex-col justify-center">
          <h2 className="
            text-left font-bold tracking-tight text-white
            text-lg sm:text-xl lg:text-2xl xl:text-3xl
          ">
            Ethically Sourced & Responsibly Mined
          </h2>
          <p className="
            mt-3 sm:mt-4 text-left text-neutral-200
            text-sm sm:text-base lg:text-lg
          ">
            Our diamonds come only from conflict-free mines to ensure responsible
            mining and sustainable practices.
          </p>
        </div>
      </WobbleCard>

      {/* CARD 3 — Transparency & Trust (Full width on lg) */}
      <WobbleCard
        containerClassName="
          col-span-1 md:col-span-2 lg:col-span-3
          bg-blue-950
          min-h-[280px] sm:min-h-[360px] lg:min-h-[300px]
          rounded-2xl shadow-xl overflow-hidden
        "
      >
        <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col justify-center">
          <h2 className="
            text-left font-bold tracking-tight text-white
            text-lg sm:text-xl md:text-2xl lg:text-3xl
          ">
            Transparency, Certification & Lifetime Assurance
          </h2>
          <p className="
            mt-3 sm:mt-4 text-left text-neutral-200
            text-sm sm:text-base lg:text-lg
          ">
            Every Eterna diamond comes with complete certification, full
            transparency in grading, and a lifetime exchange promise.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}