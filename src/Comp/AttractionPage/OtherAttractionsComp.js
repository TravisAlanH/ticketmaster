import React from "react";
import { GoInfo } from "react-icons/go";

export default function OtherAttractionsComp({ OtherAttractions, open }) {
  if (!open) return null;
  console.log(OtherAttractions);

  return (
    <div className="flex flex-col">
      <span className="text-sm font-bold">Line Up:</span>
      {OtherAttractions.map((items) => {
        return (
          <div className="flex flex-row gap-2 items-center">
            <span className="text-xs ml-2">- {items.name}</span>
            <a href={items.url} target={"_blank"} rel="noreferrer">
              <GoInfo className="w-3 h-3" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
