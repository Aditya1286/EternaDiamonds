"use client";

import React from "react";
import { Carousel, Card } from "./components/ui/craousel";

/* -------------------------------------------------------------------------- */
/*                                DATA FOR CARDS                               */
/* -------------------------------------------------------------------------- */

const data = [
  {
    category: "Premium Quality",
    title: "Unmatched Brilliance & Purity",
    src: "/cc5.jpg",
  },
  {
    category: "Craftsmanship",
    title: "Handcrafted by Master Artisans",
    src: "/cc1.jpg",
  },
  {
    category: "Trust & Transparency",
    title: "Certified Diamonds You Can Trust",
    src: "/cc2.jpg",
  },
  {
    category: "Design Excellence",
    title: "Timeless Designs with Modern Elegance",
    src: "/cc3.jpg",
  },
  {
    category: "Customization",
    title: "Personalized Jewelry Made For You",
    src: "/cc4.jpg",
  },
  {
    category: "Perfect Gifting",
    title: "Celebrate Every Occasion with Eterna",
    src: "/cc6.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                             MAIN PAGE COMPONENT                             */
/* -------------------------------------------------------------------------- */

export function EternaCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black font-sans">
        Why Choose{" "}
        <span className="text-blue-700" style={{ fontFamily: "Meddon, cursive" }}>
          Eterna
        </span>{" "}
        Diamonds
      </h2>

      <Carousel items={cards} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               DEFAULT EXPORT                                */
/* -------------------------------------------------------------------------- */

export default EternaCardsCarousel;
