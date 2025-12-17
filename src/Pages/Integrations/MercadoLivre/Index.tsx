import Section02 from "./Section02";
import Section01 from "./Section01";
import Section03 from "./Section03";
import Section04 from "./Section04";


export default function Index() {
  return (
    <>
      {/* ...outras sections */}
      <Section01 />
      <Section02 />
      <Section03 items={[]} />
      <Section04 />
    </>
  );
}