import axios from "axios";
import React from "react";
import ExternalLinks from "./ExternalLinks";

const apiKey = process.env.REACT_APP_TM_API;

export default function Page({ Attraction }) {
  const [data, setData] = React.useState([]);
  // let data;
  let id = Attraction.id;

  // let holdData = {};

  React.useEffect(() => {
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=${apiKey}&id=${id}&locale=*`)
      .then((response) => {
        setData(response.data._embedded.attractions[0]);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // setData(holdData);
  }, [id]);

  console.log(data);
  if (data.length === 0) return null;
  let name = data.name;
  if (name.length > 16) name = name.match(/[\s\S]{1,16}/g)[0] + "...";

  return (
    <div>
      <div className="px-4 pt-6 lg:pl-[5rem]">
        <div className="flex flex-row">
          <img src={data.images[3].url} alt="Attraction IMG" className="w-[22rem] h-[13rem] object-cover" />
          <div className="hidden lg:block pl-4">
            <ExternalLinks LinksObj={data.externalLinks} />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-white text-[1.5rem]">{name}</span>
            <span className="text-white text-[1rem] -translate-y-[.5rem]">Upcoming Events</span>
          </div>
          <div className="pt-2 lg:hidden">
            <ExternalLinks LinksObj={data.externalLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}
