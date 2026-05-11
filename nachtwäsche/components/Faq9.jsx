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
            Alles, was Sie über unsere Nachtwäsche wissen sollten.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Welche Größe passt mir?</h2>
            <p>
              Wir messen und beraten Sie persönlich in der Boutique. Rufen Sie
              an oder schreiben Sie uns eine Nachricht, um einen Termin zu
              vereinbaren. So finden wir gemeinsam das richtige Stück für Sie.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie pflege ich Seide richtig?
            </h2>
            <p>
              Seide liebt sanfte Behandlung. Waschen Sie bei 30 Grad in kaltem
              Wasser, verwenden Sie ein feines Waschmittel und trocknen Sie
              flach. Unsere Mitarbeiter zeigen Ihnen gerne alle Details beim
              Besuch.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Kann ich vor dem Kauf probieren?
            </h2>
            <p>
              Ja, gerne. Vereinbaren Sie einen Termin für eine Privatberatung in
              unserer Boutique am Chiemsee. Wir halten Zeit für Sie und zeigen
              Ihnen alles in Ruhe.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Gibt es Reservierungen?</h2>
            <p>
              Selbstverständlich. Wenn Sie ein Stück gefunden haben, das Ihnen
              gefällt, können Sie es reservieren. Kontaktieren Sie uns per
              WhatsApp, Telefon oder E-Mail.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Welche Marken führen Sie?</h2>
            <p>
              Wir arbeiten mit den besten Herstellern zusammen: Zimmerli, Hanro,
              La Perla und weitere Marken aus Italien, Frankreich und
              Deutschland. Jede Kollektion wurde von uns persönlich ausgewählt.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">Wir helfen Ihnen gerne weiter.</p>
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
