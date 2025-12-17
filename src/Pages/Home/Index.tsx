import Navbar from "../Nav/Nav";
import Footer from "../Nav/Footer";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Section05 from "./Section05";
import Section07 from "./Section07";
import AuroraBackground from "../../shared/AuroraBackground";


export default function IndexHome() {
  return (
    <>
      {/* BG global da página */}
      <AuroraBackground />

      {/* Conteúdo */}
      <Navbar />
      <main className="relative z-10">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section05 />
        <Section07 />
      </main>
      <Footer />
    </>
  );
}