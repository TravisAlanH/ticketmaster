import axios from "axios";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import OtherAttractionsComp from "./OtherAttractionsComp";
import TicketMasterLogo from "../../Images/TicketMaster.png";
import GoogleMapsLogo from "../..//Images/GooglePin.png";

const apiKey = process.env.REACT_APP_TM_API;

export default function EventList({ id }) {
  const [eventList, setEventList] = React.useState([]);
  //   const [OtherAttractions, setOtherAttractions] = React.useState([<div className="hidden"></div>]);
  let OtherAttractions = <div className="hidden"></div>;
  const [open, setOpen] = React.useState(false);

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

  //   let OtherAttractions = <div className="hidden"></div>;

  //// LOAD
  if (eventList.length === 0) return null;
  //// LOAD

  function viewDrop(id, items) {
    // document.getElementById(id).classList.toggle("h-0");
    if (document.getElementById(id).classList.contains("max-h-0")) {
      document.getElementById(id).classList.replace("max-h-0", "max-h-[10rem]");
    } else if (document.getElementById(id).classList.contains("max-h-[10rem]")) {
      document.getElementById(id).classList.replace("max-h-[10rem]", "max-h-0");
    }

    setOpen(true);
  }

  let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
  let dayArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  eventList.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate);
  });

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
          let location = "";
          let Address = "";
          let CityState = "";
          let Map = <div className="hidden"></div>;
          if ("venues" in items._embedded) {
            let data = items._embedded.venues[0];
            location = data.name;
            Address = data.address.line1;
            CityState = `${data.city.name}, ${data.state.stateCode}`;
            Map = (
              <a href={`https://maps.google.com/?q=${data.location.latitude},${data.location.longitude}`} target={"_blank"} rel="noreferrer" className="w-[2.2rem]">
                <img src={GoogleMapsLogo} alt="" />
              </a>
            );
          }
          // OtherAttractions
          if ("attractions" in items._embedded) OtherAttractions = <OtherAttractionsComp OtherAttractions={items._embedded.attractions} open={open} />;
          console.log(items);
          return (
            <div className="flex flex-col h-auto">
              <div className="flex flex-row border" key={index}>
                <div id="data" className=" w-11/12 h-auto">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-row gap-0">
                      <span className="text-sm w-[3.8rem] text-[#112553f8] font-extrabold">{monDay}</span>
                      <div className="flex flex-col justify-center items-center">
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
                    <button className=" px-4 rounded-md" onClick={() => viewDrop("drop" + index, items)}>
                      info
                    </button>
                  </div>
                </div>
                <div id="moreInfoToggle" className=" w-1/12 h-12 flex flex-row justify-center items-center lg:hidden">
                  <FaEllipsisV className=" p-1 w-5 h-7" onClick={() => viewDrop("drop" + index, items)} />
                </div>
              </div>
              <div id={"drop" + index} className="w-full transition-all max-h-0 overflow-hidden">
                <div className="flex flex-row justify-between">
                  {OtherAttractions}
                  <div className="flex flex-col justify-between lg:mr-[6rem]">
                    <div className="flex flex-col text-xs">
                      <span className="text-sm font-bold">Address</span>
                      <span className="ml-1"> {location}</span>
                      <span className="ml-1"> {Address}</span>
                      <span className="ml-1">{CityState}</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 mt-4 ">
                      {Map}
                      <a href={items.url} target={"_blank"} rel="noreferrer" className="text-sm w-[7rem] bg-blue-800 rounded-full">
                        <img src={TicketMasterLogo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
