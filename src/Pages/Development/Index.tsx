import AuroraBackground from "../../shared/AuroraBackground";
import Section03 from "../Home/Section03";
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Nav";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section04 from "./Section04";
import Section05 from "./Section05";


export default function IndexHome() {
  return (
    <>
      {/* Aurora Background fixo */}
      <AuroraBackground blend intensity="med" />

      {/* Conteúdo principal */}
      <Navbar />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Footer />
    </>
  );
}