import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function AttractionLinks({ windowW, saved, setHome }) {
  const [dropState, setDropState] = React.useState(true);
  const navigate = useNavigate();

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

  let mobile = true;

  if (windowW > 600) mobile = false;

  if (!mobile) {
    return (
      <div className="text-white flex flex-row w-full justify-end">
        <div
          className="w-36 h-full  hover:bg-green-400  flex flex-col justify-center items-center"
          onClick={() => {
            setHome(true);
            navigate("/home");
          }}
        >
          Home
        </div>

        {saved.map((item, index) => {
          let link = `/${item.id}`;
          return (
            <div
              className="w-36 h-full hover:bg-green-400 flex flex-col justify-center items-center"
              key={index}
              onClick={() => {
                setHome(false);
                navigate(link);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="text-white flex flex-col w-full items-end justify-end">
        <div id="Ham" className="h-14 flex flex-col justify-center" onClick={DropDown}>
          <GiHamburgerMenu id="Hamburger" className="rotate-0 transition-all text-white w-8 h-8" />
        </div>
        <div id="Drop" className="fixed w-36 top-14 -right-36 bg-green-600 transition-all -z10">
          <div
            className="w-36 h-16  hover:bg-green-400"
            onClick={() => {
              setHome(true);
              DropDown();
              navigate("/home");
            }}
          >
            Home
          </div>

          {saved.map((item, index) => {
            let link = `/${item.id}`;
            return (
              <div
                className="w-36 h-16 hover:bg-green-400"
                key={index}
                onClick={() => {
                  setHome(false);
                  DropDown();
                  navigate(link);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
