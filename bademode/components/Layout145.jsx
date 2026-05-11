"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout145() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Kollektion</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Stücke für Strand und Schwimmbad
            </h2>
            <p className="md:text-md">
              Sorgfältig ausgewählte Bademode von italienischen und europäischen
              Herstellern. Jedes Stück verbindet Handwerk mit zeitloser Eleganz.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Im Laden ansehen" variant="secondary">
                Im Laden ansehen
              </Button>
              <Button
                title="Filtern"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Filtern
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
