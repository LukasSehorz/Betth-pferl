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
          <p className="md:text-md">Alles Wissenswerte über unser Journal</p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Was ist das Journal?</h2>
            <p>
              Unser Journal ist eine Sammlung von Geschichten, Einblicken und
              Inspirationen aus der Welt von Betthupferl. Wir schreiben über
              Materialien, Handwerk, Stilberatung und die Menschen hinter
              unseren Marken.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie oft erscheinen neue Beiträge?
            </h2>
            <p>
              Neue Beiträge veröffentlichen wir regelmäßig, etwa zwei bis drei
              Mal pro Monat. Sie erhalten alle Updates automatisch, wenn Sie
              sich für unseren Newsletter anmelden.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Kann ich Beiträge teilen?</h2>
            <p>
              Selbstverständlich. Jeder Beitrag lässt sich über Social Media
              oder per E-Mail teilen. Wir freuen uns, wenn Ihnen unsere
              Geschichten gefallen.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Gibt es ein Archiv älterer Beiträge?
            </h2>
            <p>
              Ja, alle bisherigen Beiträge finden Sie in unserem Archiv. Sie
              können nach Kategorien filtern oder durchsuchen, um genau das zu
              finden, das Sie interessiert.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie kann ich Feedback geben?
            </h2>
            <p>
              Ihr Feedback ist uns wichtig. Schreiben Sie uns gerne eine E-Mail
              oder kontaktieren Sie uns direkt in der Boutique. Wir freuen uns
              über Ihre Gedanken und Vorschläge.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">Kontaktieren Sie uns direkt</p>
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
