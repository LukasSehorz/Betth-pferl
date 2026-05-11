"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout459() {
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 md:grid-cols-2 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Welten</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Fünf Kategorien für jeden Moment
          </h2>
          <p className="md:text-md">
            Von der Nacht bis zum Strand — jede Kategorie erzählt ihre eigene
            Geschichte. Entdecken Sie, was sich richtig anfühlt.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Erkunden" variant="secondary">
              Erkunden
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
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-8 sm:grid-cols-2 md:gap-16">
          <div className="flex max-w-xs flex-col items-start">
            <div className="sm:mt-[50%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-[3/4] w-full object-cover md:mb-8"
                alt="Relume placeholder image 1"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Nachtwäsche
              </h3>
              <p>Seide und Baumwolle für ruhige Nächte.</p>
            </div>
          </div>
          <div className="grid items-end justify-items-end gap-12 md:gap-28">
            <div className="flex max-w-xs flex-col items-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-square w-full object-cover md:mb-8"
                alt="Relume placeholder image 2"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Unterwäsche
              </h3>
              <p>Das Fundament jedes Outfits — perfekt sitzend.</p>
            </div>
            <div className="flex flex-col items-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="mb-6 aspect-[3/2] w-full object-cover md:mb-8"
                alt="Relume placeholder image 3"
              />
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                Dessous & Lingerie
              </h3>
              <p>Verführerische Details, die nur Sie kennen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
