import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function AttractionLinks({ window, saved }) {
  const [dropState, setDropState] = React.useState(true);

  function DropDown() {
    if (dropState) {
      document.getElementById("Drop").classList.replace("-right-36", "right-0");
      document.getElementById("Hamburger").classList.replace("rotate-0", "rotate-90");
      setDropState(false);
    }
    if (!dropState) {
      document.getElementById("Drop").classList.replace("right-0", "-right-36");
      document.getElementById("Hamburger").classList.replace("rotate-90", "rotate-0");

      setDropState(true);
    }
  }

  if (window > 600) {
    return <div className="text-white">More</div>;
  } else {
    return (
      <div className="text-white flex flex-col w-full items-end">
        <div id="Ham" className="fixed" onClick={DropDown}>
          <GiHamburgerMenu id="Hamburger" className="rotate-0 transition-all text-white w-8 h-8" />
        </div>
        <div id="Drop" className="fixed w-36 top-16 -right-36 bg-green-600 transition-all -z10">
          {saved.map((item) => {
            let link = `/${item.id}`;
            return (
              <div className="w-36 h-16">
                <Link to={link} className="NavListItemLink">
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
