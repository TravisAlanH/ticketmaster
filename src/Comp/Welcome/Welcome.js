import React from "react";
import AttractionItem from "./AttractionItem";
import SearchAttractions from "./SearchAttractions";
import SubmitAttractions from "./SubmitAttractions";

export default function Welcome({ setHome, Home, saved, setSaved, inputItem, setInputItem, setLinks }) {
  // const [saved, setSaved] = React.useState([]);
  const [toLocal, setToLocal] = React.useState(false);

  function SaveLocal() {
    if (document.getElementById("LocalCheck").checked) setToLocal(true);
    if (!document.getElementById("LocalCheck").checked) setToLocal(false);
  }

  return (
    <div className="flex flex-col justify-center items-center z-50 bg-transparent p-4 mb-4">
      <div className="w-full h-auto bg-transparent flex flex-col justify-center items-center rounded-md">
        <div id="Add Message" className="flex flex-col justify-center items-center">
          <span className="text-[2rem] lg:text-[3rem] text-white">Let's Find an Event</span>
          <span className="text-xs text-white pb-2">Search for Artist, Teams, Family Events, and Much More</span>
        </div>
        <SearchAttractions setSaved={setSaved} saved={saved} setInputItem={setInputItem} />
        <div className="flex flex-col lg:flex-row">
          {saved.map((item, index) => {
            if (item.name === "Loading") return <div key={index}></div>;
            return <AttractionItem setSaved={setSaved} saved={saved} item={item} key={index} />;
          })}
        </div>
        <div className="flex flex-row justify-start">
          <label htmlFor="LocalCheck" className="mr-2 text-white">
            Local Save:
          </label>
          <input type={"checkbox"} id="LocalCheck" onClick={SaveLocal} />
        </div>
        <SubmitAttractions setHome={setHome} Home={Home} saved={saved} toLocal={toLocal} inputItem={inputItem} setLinks={setLinks} />
      </div>
    </div>
  );
}

//    <div className="fixed flex flex-col justify-center items-center w-screen h-screen z-50 bg-[#2e55b0a7]">
