"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Prozess</p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Vier Schritte zu Ihrer perfekten Beratung
            </h2>
            <p className="text-center md:text-md">
              Wir begleiten Sie von der ersten Idee bis zur vollendeten Auswahl.
              Jeder Schritt ist durchdacht, jeder Moment zählt.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Termin vereinbaren
              </h3>
              <p className="text-center">
                Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie unser
                Formular.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Persönliche Beratung im Laden
              </h3>
              <p className="text-center">
                Unsere Spezialistinnen und Spezialisten nehmen sich Zeit für Sie
                und Ihre Wünsche.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Auswahl und Anprobe
              </h3>
              <p className="text-center">
                Entdecken Sie Stücke, die zu Ihnen passen. Probieren Sie an, bis
                es sich richtig anfühlt.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Nachbetreuung und Reservierung
              </h3>
              <p className="text-center">
                Wir halten Ihre Lieblinge bereit und begleiten Sie auch nach dem
                Kauf.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Termin" variant="secondary">
              Termin
            </Button>
            <Button
              title="→"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
