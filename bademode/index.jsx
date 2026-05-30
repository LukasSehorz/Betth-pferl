import React from "react";
import KategoriePage from "../shared/KategoriePage";

const products = [
  { name: "Bademode", material: "Anita", img: "/images/bild50.png", route: null },
  { name: "Bademode", material: "Anita", img: "/images/bild51.png", route: null },
  { name: "Bademode", material: "Anita", img: "/images/bild52.png", route: null },
];

export default function Bademode() {
  return (
    <KategoriePage
      title="Bademode"
      products={products}
      bannerImgs={[]}
    />
  );
}
