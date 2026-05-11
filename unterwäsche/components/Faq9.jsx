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
            Alles, was Sie über unsere Unterwäsche wissen müssen.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Welche Materialien verwenden Sie?
            </h2>
            <p>
              Wir arbeiten ausschließlich mit hochwertigen Naturmaterialien wie
              Seide, Baumwolle und feinen Mischgeweben. Jedes Stück wird in
              Italien gefertigt und erfüllt die höchsten Handwerksstandards. Die
              Materialien sind hautfreundlich und langlebig.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie finde ich die richtige Größe?
            </h2>
            <p>
              Unsere Größentabellen sind auf jeder Produktseite verfügbar. Wir
              empfehlen, sich vor dem Besuch in der Boutique beraten zu lassen.
              Unser Team nimmt sich Zeit für eine persönliche Anpassung.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Wie pflege ich meine Unterwäsche?
            </h2>
            <p>
              Waschen Sie Ihre Stücke von Hand in lauwarmem Wasser mit mildem
              Waschmittel. Vermeiden Sie den Trockner und hängen Sie die Wäsche
              zum Trocknen auf. So bleibt die Qualität über Jahre erhalten.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Bieten Sie einen Reservierungsservice an?
            </h2>
            <p>
              Ja, Sie können Ihre Lieblingsstücke reservieren. Kontaktieren Sie
              uns per WhatsApp, Telefon oder vereinbaren Sie einen Termin in der
              Boutique. Wir halten Ihre Wunschstücke für Sie bereit.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              Kann ich Stücke umtauschen?
            </h2>
            <p>
              Umtausch ist innerhalb von 14 Tagen nach dem Kauf möglich. Das
              Stück muss ungetragen und in Originalverpackung sein. Sprechen Sie
              mit unserem Team für Details.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Noch Fragen offen?
          </h4>
          <p className="md:text-md">
            Kontaktieren Sie uns direkt. Wir sind gerne für Sie da.
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
