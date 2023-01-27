import React from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitAttractions({ setHome, Home, saved, toLocal, inputItem, setLinks }) {
  const navigate = useNavigate();

  function SubmitAttractions() {
    // document.getElementById("Input").value = "";
    setHome(true);
    setLinks(saved);
    if (toLocal) {
      localStorage.setItem("TMAttractions", JSON.stringify(saved));
    }
    if (!toLocal) {
      sessionStorage.setItem("TMAttractions", JSON.stringify(saved));
    }
  }

  let link = `/${inputItem.id}`;

  return (
    <div className="flex flex-row gap-4">
      <button className="bg-white w-auto rounded-lg px-4 hover:bg-slate-200" onClick={SubmitAttractions}>
        Update Links
      </button>
      <div
        className="bg-white w-24 rounded-lg flex flex-row justify-center cursor-pointer"
        onClick={() => {
          document.getElementById("Input").value = inputItem.name;
          setHome(false);
          navigate(link);
        }}
      >
        Search
      </div>
      {/* <button className="bg-red-300 w-48 rounded-lg" onClick={SubmitAttractions}>
        Search
      </button> */}
    </div>
  );
}
