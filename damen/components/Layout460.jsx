"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout460() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 lg:mb-20 lg:gap-x-16">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Ausgewählt</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Drei Stücke, die wir lieben
            </h2>
          </div>
          <div className="mx-[7.5%] md:mt-48">
            <p className="md:text-md">
              Diese Auswahl zeigt, was uns bewegt — Handwerk, das man spürt,
              Materialien, die atmen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Ansehen" variant="secondary">
                Ansehen
              </Button>
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Mehr
              </Button>
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-8 sm:grid-cols-2 md:gap-16">
          <div className="grid items-end gap-12 md:gap-28">
            <div className="flex max-w-xs flex-col items-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-square w-full object-cover md:mb-8"
                alt="Relume placeholder image 1"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Seide, die lebt
              </h3>
              <p>Ein Nachthemd, das sich wie eine zweite Haut anfühlt.</p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-[3/2] w-full object-cover md:mb-8"
                alt="Relume placeholder image 2"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Italienische Eleganz
              </h3>
              <p>Ein Stück, das Ihre Haut kennt.</p>
            </div>
          </div>
          <div className="flex max-w-xs flex-col items-start justify-self-end">
            <div className="mt-0 sm:mt-[50%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-[3/4] w-full object-cover md:mb-8"
                alt="Relume placeholder image 3"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Präzision und Komfort
              </h3>
              <p>Unterwäsche, die den ganzen Tag hält.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
