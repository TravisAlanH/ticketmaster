import React from "react";
import AttractionLinks from "./AttractionLinks";
import AttractionsSelect from "./AttractionsSelect";

export default function NavBase({ setHome, Home, saved }) {
  const [windowW, setWindow] = React.useState(window.innerWidth);
  console.log(window.innerWidth);

  const resizeObserver = new ResizeObserver((e) => {
    setWindow(e[0].contentRect.width);
  });

  resizeObserver.observe(document.body);

  return (
    <div className="w-full flex flex-row fixed bg-sky-800 p-4 z-10">
      <AttractionsSelect setHome={setHome} Home={Home} />
      <AttractionLinks windowW={windowW} saved={saved} />
    </div>
  );
}
