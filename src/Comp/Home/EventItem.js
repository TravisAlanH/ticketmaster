import React from "react";
import TicketMasterLogo from "../../Images/TicketMaster.png";

export default function EventItem({ item, index }) {
  let name = item.name;
  if (name.length > 26) name = name.match(/[\s\S]{1,26}/g)[0] + "...";

  let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
  let dayArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  function formatTime(Time) {
    let hour = Time.split(":")[0];
    let min = Time.split(":")[1];
    let ampm = "am";
    if (Number(hour) > 12) ampm = "pm";
    if (Number(hour) > 12) hour = Number(hour) % 12;
    return `${hour}:${min} ${ampm}`;
  }

  let TimeText = "00:00";
  if ("localTime" in item.dates.start) TimeText = formatTime(item.dates.start.localTime);

  let numberDay = item.dates.start.localDate.split("-")[2];
  let date = new Date(item.dates.start.localDate);
  let monDay = monthArray[date.getMonth()] + " " + numberDay;
  let nameDate = dayArray[date.getDay()];

  let Content = (
    <div className="flex flex-col pl-2 justify-center">
      <span className="">{name}</span>
      <div className="flex flex-row text-xs gap-2">
        <span className="">{monDay}</span>
        <span className="">{nameDate}</span>
        <span className="">{TimeText}</span>
      </div>
    </div>
  );

  if (index === 100) {
    console.log(item);

    return (
      <div className="w-full lg:w-[25rem] my-2 drop-shadow-lg">
        <div className="flex flex-col">
          <div className="">
            <img className="w-full object-fill rounded-md" src={item.images[3].url} alt=" " />
          </div>
          <div className="-translate-y-12">
            <div className="absolute flex flex-row justify-between h-12 w-full bg-[#00000077] text-white rounded-md">
              {Content}
              <div id="moreInfoToggle" className=" w-[5rem] flex flex-row justify-center items-center">
                {/* <FaEllipsisV className=" p-1 w-5 h-7" /> */}
                <a href={item.url} target={"_blank"} rel="noreferrer" className="text-sm w-[7rem] bg-blue-800 rounded-full mr-2">
                  <img src={TicketMasterLogo} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#112553f8] my-2 rounded-md drop-shadow-2xl">
      <div className="flex flex-row">
        <div className="w-16 lg:w-24 h-12">
          <img className="w-16 lg:w-24 h-full object-cover lg:object-cover rounded-md" src={item.images[0].url} alt=" " />
        </div>
        <div className="flex flex-row justify-between lg:w-[25rem] text-white">
          {Content}
          <div id="moreInfoToggle" className=" w-[5rem] flex flex-row justify-center items-center">
            {/* <FaEllipsisV className=" p-1 w-5 h-7" /> */}
            <a href={item.url} target={"_blank"} rel="noreferrer" className="text-sm w-[7rem] bg-blue-800 rounded-full mr-2">
              <img src={TicketMasterLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
