import React from "react";

export default function EventItem({ item, index }) {
  let name = item.name;
  if (name.length > 28) name = name.match(/[\s\S]{1,28}/g)[0] + "...";

  if (index === 0) {
    return (
      <div className="w-full  bg-slate-400 my-2">
        <div className="flex flex-col">
          <div className="w-full ">
            <img className="w-full object-contain" src={item.images[3].url} alt=" " />
          </div>
          <span className="pl-2">{name}</span>
        </div>
      </div>
    );
  }

  //   console.log(item);
  return (
    <div className="w-full bg-slate-400 my-2">
      <div className="flex flex-row">
        <div className="w-12 h-12">
          <img className="w-12 h-12 object-cover" src={item.images[0].url} alt=" " />
        </div>
        <span className="pl-2">{name}</span>
      </div>
    </div>
  );
}
