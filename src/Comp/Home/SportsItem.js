import React from "react";

export default function SportsItem({ item }) {
  console.log(item);
  let Location;
  if ("_embedded" in item) {
    Location = (
      <div>
        <div className="whitespace-pre-line">{item._embedded.venues[0].name}</div>
        <div>{item._embedded.venues[0].address.line1}</div>
        <div>{item._embedded.venues[0].city.name + " " + item._embedded.venues[0].state.stateCode}</div>
        <a href={item._embedded.venues[0].url} target={"_blank"} rel="noreferrer">
          Link
        </a>
      </div>
    );
  } else if ("place" in item) {
    Location = (
      <div>
        <div className="whitespace-pre-line">{item.type}</div>
        <div>{item.place.address.line1}</div>
        <div>{item.place.city.name + " " + item.place.state.stateCode}</div>
        <a href={item.url} target={"_blank"} rel="noreferrer">
          Link
        </a>
      </div>
    );
  }

  let eventName = item.name;
  if (eventName > 39) eventName = eventName.match(/[\s\S]{1,39}/g)[0] + "...";
  return (
    <div className="w-[20rem] lg:w-[30rem] flex flex-row justify-center my-4">
      <div className="w-[20rem] lg:w-[30rem] bg-slate-200">
        <div className="flex flex-col lg:flex-row border">
          <div className="flex flex-row">
            <div className="w-[12rem] h-[7.5rem] lg:w-[18rem] lg:h-[10rem]">
              <img className="object-contain w-[12rem] h-[8rem] lg:w-[18rem] lg:h-[10rem]" src={item.images[0].url} alt="Img" />
              <div className="relative w-48 lg:w-full h-10 -translate-y-12 lg:-translate-y-10 text-sm text-white bg-[#0e1933cb] px-2">{eventName}</div>
            </div>
            <div className="text-xs w-[8rem] p-2">{Location}</div>
          </div>
          <div>{item.dates.start.localDate}</div>
        </div>
      </div>
    </div>
  );
}
