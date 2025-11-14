"use client";
import React from "react";
import { ContainerScroll } from "./components/ui/container";

function EtrnaHeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ContainerScroll
        // Optional: hide the default title container if you only want the image
        // titleComponent={null}
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black text-center md:text-left leading-tight">
              Timeless Brilliance, <br />
              <span
                className="block text-5xl md:text-[6.5rem] font-normal leading-none"
                style={{ fontFamily: "'Meddon', cursive" }}
              >
                <span className="text-blue-700">Etrna</span>
              </span>
              <span>Diamonds</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-black/80 max-w-md font-medium">
              Rare. Radiant. Forever.
            </p>
          </>
        }
      >
        {/* ---- FULL-SIZE IMAGE ---- */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/d1.jpg"               // <-- put the real path here
            alt="Etrna Diamonds - Eternal Luxury"
            className="
              absolute inset-0            /* top/left/right/bottom = 0 */
              w-full h-full               /* fill the wrapper */
              object-cover                /* scale to cover, no distortion */
              select-none pointer-events-none
            "
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}

export default EtrnaHeroScroll;