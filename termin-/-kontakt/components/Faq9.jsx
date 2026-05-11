"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Häufig gefragt
          </h2>
          <p className="md:text-md">
            Antworten zu Terminen, Anfahrt und unserer Beratung.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie buche ich einen Termin?
            </h2>
            <p>
              Nutzen Sie unser Formular oben oder kontaktieren Sie uns direkt
              per WhatsApp und Telefon. Wir finden gerne einen Zeitpunkt, der zu
              Ihnen passt.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie erreiche ich die Boutique?
            </h2>
            <p>
              Betthupferl liegt in Übersee am Chiemsee in Bayern. Von München
              sind es etwa 90 Minuten, von Salzburg etwa 60 Minuten. Gerne
              helfen wir mit Anfahrtshinweisen.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Kann ich ohne Termin vorbeikommen?
            </h2>
            <p>
              Selbstverständlich. Besuchen Sie uns gerne spontan während unserer
              Öffnungszeiten. Ein Termin ermöglicht uns jedoch, Ihnen ungeteilte
              Aufmerksamkeit zu schenken.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Gibt es Parkplätze vor Ort?
            </h2>
            <p>
              Ja, vor der Boutique stehen ausreichend Parkplätze zur Verfügung.
              Die Anfahrt ist einfach und die Lage am See macht den Besuch zu
              einem besonderen Erlebnis.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Was kostet eine Privatberatung?
            </h2>
            <p>
              Unsere Beratung ist kostenfrei. Wir nehmen uns Zeit für Ihre
              Wünsche und helfen Ihnen, die richtige Wahl zu treffen. Gerne
              beraten wir Sie zu BH-Anpassung, Stilfragen oder Geschenken.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">Kontaktieren Sie uns jederzeit.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Schreiben" variant="secondary">
              Schreiben
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
