"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout298() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">
                Kategorien
              </p>
              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Unterwäsche nach Stil und Anlass
              </h2>
              <p className="text-center md:text-md">
                Wählen Sie aus unseren Kategorien oder nutzen Sie die Filter, um
                Ihre perfekte Unterwäsche zu finden.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Nach Marke filtern
              </h3>
              <p className="text-center">
                Entdecken Sie Stücke von Zimmerli, Hanro und anderen
                italienischen Meistern.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Nach Größe filtern
              </h3>
              <p className="text-center">
                Finden Sie Ihre perfekte Passform in unserer vollständigen
                Größenauswahl.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Nach Anlass filtern
              </h3>
              <p className="text-center">
                Von alltäglich bis besonders – für jeden Moment das richtige
                Stück.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Sortierung wählen
              </h3>
              <p className="text-center">
                Sortieren Sie nach Neuheit, Marke oder Ihren persönlichen
                Favoriten.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Filter" variant="secondary">
              Filter
            </Button>
            <Button
              title="Zurück"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Zurück
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
