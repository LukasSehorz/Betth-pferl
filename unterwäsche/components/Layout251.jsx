"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Kollektion</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Unsere Auswahl an Unterwäsche
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Jedes Stück wurde mit Sorgfalt ausgewählt. Italienische
              Handwerkskunst trifft auf zeitlose Eleganz. Erleben Sie den
              Unterschied zwischen guter und großartiger Unterwäsche.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Zimmerli Seide Slip
            </h3>
            <p>Sanfte Seide für die zweite Haut.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Hanro Baumwoll-BH
            </h3>
            <p>Komfort ohne Kompromisse.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Lorenz Spitzen-Ensemble
            </h3>
            <p>Raffinesse in feinen Details.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Ansehen</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            →
          </Button>
        </div>
      </div>
    </section>
  );
}
