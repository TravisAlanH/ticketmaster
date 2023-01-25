import React from "react";

export default function SubmitAttractions({ setHome, Home, saved, toLocal }) {
  function SubmitAttractions() {
    setHome(!Home);
    if (toLocal) {
      localStorage.setItem("TMAttractions", JSON.stringify(saved));
    }
  }
  return (
    <button className="bg-red-300 w-48 rounded-lg" onClick={SubmitAttractions}>
      Submit
    </button>
  );
}
