"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout457() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Auswahl</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Drei Stücke, die den Mann definieren
          </h2>
          <p className="md:text-md">
            Jedes dieser Teile erzählt eine Geschichte von Handwerk und
            Geschmack. Sie sind nicht zufällig gewählt, sondern Ausdruck dessen,
            was wir für richtig halten.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="w-full">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Seidentuch aus Lyon
            </h2>
            <p>Zartes Gewebe, das gegen die Haut spricht.</p>
          </div>
          <div className="w-full md:mt-[25%]">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Seidentuch aus Lyon
            </h2>
            <p>Zartes Gewebe, das gegen die Haut spricht.</p>
          </div>
          <div className="w-full md:mt-[50%]">
            <div className="rb-6 mb-6 w-full md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 3"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
            <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Seidentuch aus Lyon
            </h2>
            <p>Zartes Gewebe, das gegen die Haut spricht.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Ansehen" variant="secondary">
            Ansehen
          </Button>
          <Button
            title="Alle"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Alle
          </Button>
        </div>
      </div>
    </section>
  );
}
