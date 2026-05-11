"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header62_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Moment</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Bevor Sie gehen
        </h1>
        <p className="md:text-md">
          Melden Sie sich an und erhalten Sie Zugang zu exklusiven Highlights
          und Angeboten.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Anmelden">Anmelden</Button>
          <Button title="Später" variant="secondary">
            Später
          </Button>
        </div>
      </div>
    </section>
  );
}
