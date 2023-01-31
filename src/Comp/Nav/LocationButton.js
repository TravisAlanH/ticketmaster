import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationButton({ setLocation }) {
  var _position;

  function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  var onSuccess = function (position) {
    _position = position;
    setLocation(`${_position.coords.latitude},${_position.coords.longitude}`);
    console.log(_position);
  };

  function onError(error) {
    alert("Error: " + error.message);
  }
  return (
    <div
      className="w-12 h-14 flex flex-col justify-center items-center mx-1"
      onClick={() => {
        getLocation();
      }}
    >
      <button className="ButtonBackground w-12 h-12 flex flex-row justify-center items-center">
        <FaMapMarkerAlt className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
