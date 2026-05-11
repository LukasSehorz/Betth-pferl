"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Fragen
          </h2>
          <p className="md:text-md">
            Alles, was Sie über italienische Mode wissen sollten.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie erkenne ich echte italienische Qualität?
            </h2>
            <p>
              Italienische Stoffe zeichnen sich durch ihre Verarbeitung und
              Langlebigkeit aus. Wir arbeiten nur mit Manufakturen zusammen, die
              traditionelle Handwerkstechniken bewahren. Jedes Stück wird mit
              Sorgfalt gefertigt und hält ein Leben lang.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Welche Pflege braucht italienische Mode?
            </h2>
            <p>
              Unsere italienischen Stücke benötigen sanfte Pflege. Wir empfehlen
              Handwäsche oder Schonwaschgang bei niedriger Temperatur.
              Lufttrocknung erhält die Qualität der Stoffe am besten. Gerne
              beraten wir Sie persönlich zur richtigen Pflege.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Passt italienische Mode auch großen Größen?
            </h2>
            <p>
              Ja. Unsere italienischen Partner bieten großzügige Größenpaletten
              an. Die Schnitte sind elegant und schmeichelhaft für alle
              Körperformen. Bei uns finden Sie die richtige Größe und den
              perfekten Sitz.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Kann ich italienische Mode reservieren?
            </h2>
            <p>
              Selbstverständlich. Sie können jedes Stück reservieren und in der
              Boutique anprobieren. Kontaktieren Sie uns per WhatsApp oder
              Telefon, um ein Stück zu reservieren. Wir halten es für Sie
              bereit.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Gibt es italienische Mode auch für Herren?
            </h2>
            <p>
              Ja, wir führen eine exquisite Kollektion italienischer Mode für
              Herren. Von klassischen Schnitten bis zu modernen Designs finden
              Sie alles in unserer Boutique. Lassen Sie sich von unserem Team
              beraten.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">
            Kontaktieren Sie uns direkt für persönliche Beratung.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontakt" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
