import React from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitAttractions({ setHome, Home, saved, toLocal, inputItem, setLinks }) {
  const navigate = useNavigate();

  function SubmitAttractions() {
    document.getElementById("Input").value = "";
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
    <div>
      <button className="bg-red-300 w-48 rounded-lg" onClick={SubmitAttractions}>
        Add
      </button>
      <div
        className="bg-red-300 w-48 rounded-lg"
        onClick={() => {
          console.log(inputItem.name);
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
