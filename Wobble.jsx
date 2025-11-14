import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

      {/* CARD 1 — Craftsmanship */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-amber-900 min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Masterful Craftsmanship, Timeless Brilliance
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Every Eterna diamond is handcrafted by skilled artisans using
            precision techniques that bring unmatched sparkle and elegance.
          </p>
        </div>

        <img
          src="/diamond-craft.webp"
          width={500}
          height={500}
          alt="diamond craftsmanship"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* CARD 2 — Ethical Sourcing */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-900">
        <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Ethically Sourced & Responsibly Mined
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our diamonds come only from conflict-free mines to ensure responsible
          mining and sustainable practices.
        </p>
      </WobbleCard>

      {/* CARD 3 — Transparency & Trust */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      >
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Transparency, Certification & Lifetime Assurance
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Every Eterna diamond comes with complete certification, full
            transparency in grading, and a lifetime exchange promise.
          </p>
        </div>

        <img
          src="/diamond-transparency.webp"
          width={500}
          height={500}
          alt="diamond transparency"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>

    </div>
  );
}
