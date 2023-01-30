import React from "react";
import TicketMasterLogo from "../../Images/TicketMaster.png";

export default function FooterContent() {
  return (
    <div className="text-white">
      <div className="flex flex-col gap-2 justify-center items-center">
        <span>Designed and Created by Travis Heidelberger</span>
        <span className="text-sm">Data Provided by Ticketmaster API</span>
        <div className="flex flex-row gap-4">
          <a href="https://www.TravisH.dev" target={"_blank"} rel="noreferrer" className="w-[10rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full">
            <span className="text-sm font-bold">TravisH.dev</span>
          </a>
          {/* <div className="w-[10rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full"> */}
          <a href="https://www.ticketmaster.com/" target={"_blank"} rel="noreferrer" className="w-[10rem] h-[1.5rem] flex flex-col justify-center items-center bg-black rounded-full flex flex-col justify-center items-center">
            <img src={TicketMasterLogo} alt=" " className="w-[70%]" />
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
