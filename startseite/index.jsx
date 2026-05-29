import React, { useState } from "react";
import { HeroCollage } from "./components/HeroCollage";
import { ProductSection } from "./components/ProductSection";
import { ResortSection } from "./components/ResortSection";
import { DerLookSection } from "./components/DerLookSection";
import { EditorialSection } from "./components/EditorialSection";
import { InsideSection } from "./components/InsideSection";
import { Footer } from "./components/Footer";
import { IntroScreen } from "./components/IntroScreen";

export default function Page() {
  const [showIntro, setShowIntro] = useState(() => {
    try { return !sessionStorage.getItem("intro_shown"); } catch { return true; }
  });

  return (
    <div>
      {showIntro && (
        <IntroScreen onDone={() => { try { sessionStorage.setItem("intro_shown", "1"); } catch {} setShowIntro(false); }} />
      )}
      <HeroCollage />
      <ProductSection />
      <ResortSection />
      <DerLookSection />
      <EditorialSection />
      <InsideSection />
      <Footer />
    </div>
  );
}
