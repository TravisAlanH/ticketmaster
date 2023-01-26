import React from "react";
import { FaTicketAlt } from "react-icons/fa";

export default function AttractionsSelect({ setHome, Home, dropState, setDropState }) {
  return (
    <div className="h-14 w-12 flex flex-col justify-center items-center" onClick={() => setHome(!Home)}>
      <button>
        <FaTicketAlt className="text-white w-8 h-8" />
      </button>
    </div>
  );
}
