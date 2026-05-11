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
            Alles, was Sie über unsere Marken und Services wissen sollten.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Welche Marken führen Sie?</h2>
            <p>
              Wir arbeiten mit über 30 sorgfältig ausgewählten Marken zusammen.
              Jede Kollektion verkörpert Handwerkskunst, Qualität und zeitlose
              Eleganz. Von italienischen Meistern bis zu französischen
              Klassikern – alles, was wir führen, erfüllt unsere hohen Ansprüche
              an Material und Verarbeitung.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Kann ich Stücke vorab reservieren?
            </h2>
            <p>
              Ja. Kontaktieren Sie uns per WhatsApp, Telefon oder E-Mail mit dem
              gewünschten Stück. Wir reservieren es gerne für Sie und
              informieren Sie, sobald es verfügbar ist. Eine persönliche
              Privatberatung ist ebenfalls möglich.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Gibt es exklusive Marken nur hier?
            </h2>
            <p>
              Einige unserer Marken sind in der Region exklusiv bei uns
              erhältlich. Wir konzentrieren uns auf Qualität statt Quantität und
              arbeiten eng mit unseren Partnern zusammen, um eine kuratierte
              Auswahl zu bieten, die Sie nicht überall finden.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Welche Marken für Herren?</h2>
            <p>
              Unsere Herren-Kollektion umfasst edle Nachtwäsche, Unterwäsche,
              Bademode und italienische Ready-to-Wear von Marken, die
              Handwerkskunst und Komfort vereinen. Jedes Stück ist für den
              anspruchsvollen Mann ausgewählt.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Wie finde ich meine Größe?</h2>
            <p>
              Unsere Privatberatung hilft Ihnen, die perfekte Größe und den
              richtigen Schnitt zu finden. Besuchen Sie uns im Laden oder
              vereinbaren Sie einen Termin. Wir nehmen uns Zeit für Sie.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">
            Kontaktieren Sie uns direkt – wir helfen gerne weiter.
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
