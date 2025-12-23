
import Footer from "../Nav/Footer";
import Navbar from "../Nav/Nav";
import Section01 from "./Section01";
import Section02 from "./Section02";


export default function IndexAbout() {
  return (
    <>
      {/* ...outras sections */}
      <Navbar />
      <Section01 />
      <Section02 />
      <Footer variant="light" />
    </>
  );
}