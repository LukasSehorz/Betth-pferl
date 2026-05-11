"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout312() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Kategorien</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Vier Welten für den anspruchsvollen Mann
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Jede Kategorie wurde mit Bedacht zusammengestellt. Vom klassischen
              Nachthemd bis zur italienischen Leinengarderobe — alles spricht
              von Qualität und Geschmack.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Nachtwäsche
            </h3>
            <p>Seide und Leinen für erholsame Nächte</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Unterwäsche
            </h3>
            <p>Essentials aus Baumwolle, Seide und Mischgeweben</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Bademode
            </h3>
            <p>Schnitte, die den Körper verstehen</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Italienische Mode
            </h3>
            <p>Hemden, Hosen und Jacken von Mailand bis Neapel</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="Entdecken" variant="secondary">
            Entdecken
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
    </section>
  );
}
