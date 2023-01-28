import axios from "axios";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";

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

  //// LOAD
  if (eventList.length === 0) return null;
  //// LOAD
  console.log(eventList);

  let monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"];
  let dayArray = ["MON", "TUE", "WED", "THU", "FIR", "SAT", "SUN"];

  return (
    <div>
      EventList
      <div className="flex flex-col w-full">
        {eventList.map((items, index) => {
          let nameMobile = items.name;
          let nameLarge = items.name;
          if (nameMobile.length > 35) nameMobile = nameMobile.match(/[\s\S]{1,35}/g)[0] + "...";
          //   let DateSplit = items.dates.start.localDate.split("-");
          //   let date = DateSplit[1] + "/" + DateSplit[2];
          let numberDay = items.dates.start.localDate.split("-")[2];
          let date = new Date(items.dates.start.localDate);
          let monDay = monthArray[date.getMonth()] + " " + numberDay;
          let nameDate = dayArray[date.getDay()];
          console.log(items);
          return (
            <div className="flex flex-row border" key={index}>
              <div id="data" className="border w-11/12 h-12">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-row gap-2">
                    <span className="text-sm w-[3rem]">{monDay}</span>
                    <span className="text-sm w-[3rem]">{nameDate}</span>
                  </div>
                  {/* <div>asdf</div> */}
                  <span className="text-sm lg:hidden">{nameMobile}</span>
                  <span className="text-sm hidden lg:block">{nameLarge}</span>
                </div>
              </div>

              <div id="moreInfoToggle" className="border w-1/12 h-12 lg:flex flex-row justify-center items-center hidden">
                <div>
                  <button className="border px-4 rounded-md">info</button>
                </div>
              </div>
              <div id="moreInfoToggle" className="border w-1/12 h-12 flex flex-row justify-center items-center lg:hidden">
                <FaEllipsisV className="border p-1 w-5 h-7" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
