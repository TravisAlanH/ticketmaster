import axios from "axios";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import OtherAttractionsComp from "./OtherAttractionsComp";

const apiKey = process.env.REACT_APP_TM_API;

export default function EventList({ id }) {
  const [eventList, setEventList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&attractionId=${id}&locale=*`)
      .then((response) => {
        setEventList(response.data._embedded.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function viewDrop(id) {
    document.getElementById(id).classList.toggle("h-0");
  }

  //// LOAD
  if (eventList.length === 0) return null;
  //// LOAD
  console.log(eventList);

  let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
  let dayArray = ["MON", "TUE", "WED", "THU", "FIR", "SAT", "SUN"];

  return (
    <div>
      EventList
      <div className="flex flex-col w-full gap-2">
        {eventList.map((items, index) => {
          //name
          let nameMobile = items.name;
          let nameLarge = items.name;
          if (nameMobile.length > 35) nameMobile = nameMobile.match(/[\s\S]{1,35}/g)[0] + "...";
          //date
          let numberDay = items.dates.start.localDate.split("-")[2];
          let date = new Date(items.dates.start.localDate);
          let monDay = monthArray[date.getMonth()] + " " + numberDay;
          let nameDate = dayArray[date.getDay()];
          // location
          let location = "test";
          if ("venues" in items._embedded) location = items._embedded.venues[0].name;
          // OtherAttractions
          let OtherAttractions = <div className="hidden"></div>;
          if ("attractions" in items._embedded) OtherAttractions = <OtherAttractionsComp OtherAttractions={items._embedded.attractions} />;
          console.log(items);
          return (
            <div className="flex flex-col h-auto">
              <div className="flex flex-row border" key={index}>
                <div id="data" className=" w-11/12 h-auto">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-row gap-0">
                      <span className="text-sm w-[3.8rem] text-[#112553f8] font-extrabold">{monDay}</span>
                      <div className="flex flex-col justify-end">
                        <span className="text-xs w-[3rem]">{nameDate}</span>{" "}
                      </div>
                    </div>
                    {/* <div>asdf</div> */}
                    <div className="flex flex-col lg:flex-row lg:justify-between w-full">
                      <span className="text-sm lg:hidden">{nameMobile}</span>
                      <span className="text-sm hidden lg:block">{nameLarge}</span>
                      <span className="lg:text-sm lg:mr-16 text-xs text-gray-500">{location}</span>
                    </div>
                  </div>
                </div>
                <div id="moreInfoToggle" className=" w-1/12 h-12 lg:h-auto lg:flex flex-row justify-center items-center hidden">
                  <div>
                    <button className=" px-4 rounded-md" onClick={() => viewDrop("drop" + index)}>
                      info
                    </button>
                  </div>
                </div>
                <div id="moreInfoToggle" className=" w-1/12 h-12 flex flex-row justify-center items-center lg:hidden">
                  <FaEllipsisV className=" p-1 w-5 h-7" onClick={() => viewDrop("drop" + index)} />
                </div>
              </div>
              <div id={"drop" + index} className="w-full transition-all h-0 overflow-hidden">
                {OtherAttractions}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
