import React from "react";
import AttractionLinks from "./AttractionLinks";
import AttractionsSelect from "./AttractionsSelect";
import LocationButton from "./LocationButton";

export default function NavBase({ setHome, Home, saved, setLocation }) {
  const [windowW, setWindow] = React.useState(window.innerWidth);

  const resizeObserver = new ResizeObserver((e) => {
    setWindow(e[0].contentRect.width);
  });

  resizeObserver.observe(document.body);

  return (
    <div className="w-full flex flex-row fixed top-0 bg-transparent px-4 z-10">
      <AttractionsSelect setHome={setHome} Home={Home} />
      <LocationButton setLocation={setLocation} />
      <AttractionLinks windowW={windowW} saved={saved} setHome={setHome} Home={Home} />
      {/* <AttractionLinks saved={saved} /> */}
    </div>
  );
}
