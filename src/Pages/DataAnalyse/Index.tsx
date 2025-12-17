
import AuroraBackground from "../../shared/AuroraBackground";
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Nav";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";

export default function IndexHome() {
  return (
    <>
      {/* Aurora background global */}
      <AuroraBackground blend intensity="med" />

      {/* Conteúdo da página */}
      <Navbar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Footer />
    </>
  );
}