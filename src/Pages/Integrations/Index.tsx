import { useState } from "react";
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Nav";

import IndexAmazon from "./Amazon/Index";
import IndexMercadoLivre from "./MercadoLivre/Index";
import IndexShoppe from "./Shoppe/Index";

import Section01, { type Marketplace } from "./Section01";
import AuroraBackground from "../../shared/AuroraBackground";


export default function Index() {
  const [market, setMarket] = useState<Marketplace>("Amazon");

  return (
    <>
      {/* Aurora BG global */}
      <AuroraBackground blend intensity="med" />

      <Navbar />
      <Section01 market={market} onChange={setMarket} />

      {market === "Amazon" && <IndexAmazon />}
      {market === "Shopee" && <IndexShoppe />}
      {market === "Mercado Livre" && <IndexMercadoLivre />}

      <Footer />
    </>
  );
}