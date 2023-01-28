import axios from "axios";
import React from "react";

const apiKey = process.env.REACT_APP_TM_API;

export default function EventList({ id }) {
  React.useEffect(() => {
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&attractionId=${id}&locale=*`)
      .then((response) => {
        console.log(response.data._embedded.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      EventList
      <div>{}</div>
    </div>
  );
}
