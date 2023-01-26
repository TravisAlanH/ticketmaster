import React from "react";
import { FaTicketAlt } from "react-icons/fa";

export default function AttractionsSelect({ setHome, Home }) {
  return (
    <button onClick={() => setHome(!Home)}>
      <FaTicketAlt className="text-white w-8 h-8" />
    </button>
  );
}
