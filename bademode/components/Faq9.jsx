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
            Alles, was Sie über unsere Badekollektion wissen müssen.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Welche Größe passt?</h2>
            <p>
              Wir bieten Privatberatung für die perfekte Passform an. Besuchen
              Sie uns in der Boutique oder vereinbaren Sie einen Termin per
              WhatsApp.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Wie pflege ich Bademode?</h2>
            <p>
              Hochwertige Materialien verdienen sanfte Pflege. Wir geben Ihnen
              gerne detaillierte Anweisungen für jedes Stück mit auf den Weg.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Sind alle Marken verfügbar?
            </h2>
            <p>
              Unser Bestand wechselt saisonal. Fragen Sie nach Verfügbarkeit im
              Laden oder kontaktieren Sie uns direkt für spezielle Wünsche.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Kann ich reservieren?</h2>
            <p>
              Ja, wir halten Stücke gerne für Sie bereit. Nutzen Sie unser
              Reservierungsformular oder rufen Sie uns an.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Gibt es Anpassungen?</h2>
            <p>
              Für ausgewählte Stücke bieten wir diskrete Anpassungen an.
              Sprechen Sie mit unserem Team über Ihre Wünsche.
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
            <Button title="Anrufen" variant="secondary">
              Anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
