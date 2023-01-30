import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import TicketMasterLogo from "../../Images/TicketMaster.png";

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
          className="w-36 h-full  hover:bg-[#35579ff8]  flex flex-col justify-center items-center px-2"
          onClick={() => {
            setHome(true);
            navigate("/home");
          }}
        >
          Home
        </div>

        {saved.map((item, index) => {
          let link = `/${item.id}`;
          if (link === "/Loading") return null;
          return (
            <div
              className="w-36 h-full hover:bg-[#35579ff8] px-2 flex flex-col justify-center items-center"
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
        <div id="Drop" className="fixed w-36 top-14 -right-36 bg-[#112553f8] transition-all -z10 ">
          <div
            className="w-36 h-16  hover:bg-[#35579ff8] flex flex-col justify-center items-start"
            onClick={() => {
              setHome(true);
              DropDown();
              navigate("/home");
            }}
          >
            <span className="pl-2">Home</span>
          </div>

          {saved.map((item, index) => {
            let link = `/${item.id}`;
            if (link === "/Loading") return null;
            return (
              <div
                className="w-36 h-16 hover:bg-[#35579ff8] flex flex-col justify-center items-start"
                key={index}
                onClick={() => {
                  setHome(false);
                  DropDown();
                  navigate(link);
                }}
              >
                <span className="pl-2"> {item.name}</span>
              </div>
            );
          })}
          <div className="flex flex-col gap-2 py-2 bg-transparent">
            <a href="https://www.TravisH.dev" target={"_blank"} rel="noreferrer" className="w-[8rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full">
              <span className="text-xs font-bold">TravisH.dev</span>
            </a>
            {/* <div className="w-[10rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full"> */}
            <a href="https://www.ticketmaster.com/" target={"_blank"} rel="noreferrer" className="w-[8rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full flex flex-col justify-center items-center">
              <img src={TicketMasterLogo} alt=" " className="w-[70%]" />
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
