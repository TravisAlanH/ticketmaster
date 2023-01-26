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
      className="w-12 h-14  hover:bg-green-400 flex flex-col justify-center items-center"
      onClick={() => {
        getLocation();
      }}
    >
      <FaMapMarkerAlt className="text-white w-6 h-6" />
    </div>
  );
}
