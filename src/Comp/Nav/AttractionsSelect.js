import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AttractionsSelect({ setHome, Home, dropState, setDropState }) {
  const navigate = useNavigate();

  return (
    <div
      className="h-14 w-12 flex flex-col justify-center items-center"
      onClick={() => {
        navigate("/home");
        setHome(true);
      }}
    >
      <button>
        <FaTicketAlt className="text-white w-8 h-8" />
      </button>
    </div>
  );
}
