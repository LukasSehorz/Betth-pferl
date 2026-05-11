"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 mr-auto flex max-w-lg flex-col justify-start text-left md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Kontakt</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Adresse
          </h2>
          <p className="md:text-md">Wir sind hier. Komm vorbei.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Übersee am Chiemsee
            </h3>
            <p className="text-center">
              Seestraße 47, 83236 Übersee am Chiemsee, Deutschland
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Anfahrt"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Anfahrt
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                className="h-full w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Öffnungszeiten
            </h3>
            <p className="text-center">
              Montag bis Freitag 10–18 Uhr, Samstag 10–17 Uhr, Sonntag
              geschlossen
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Anrufen"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Anrufen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
