import React from "react";
import axios from "axios";
import sportTest from "../TestingData/Sports";
import concertTest from "../TestingData/Concert";
import artTest from "../TestingData/Art";
import familyTest from "../TestingData/Family";
import carTest from "../TestingData/Car";
// import SportsItem from "./SportsItem";
import EventItem from "./EventItem";
import HomeLabel from "./HomeLabel";
import Background from "../Nav/Background";

const apiKey = process.env.REACT_APP_TM_API;

export default function HomePage({ locationLatLon }) {
  const [sports, setSports] = React.useState(sportTest);
  const [concert, setConcert] = React.useState(concertTest);
  const [family, setFamily] = React.useState(familyTest);
  const [art, setArt] = React.useState(artTest);
  const [carousel, setCarousel] = React.useState(carTest);

  React.useEffect(() => {
    const config = {
      "Access-Control-Allow-Origin": "*",
    };

    let Car = [];
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=sports&latlong=${locationLatLon}&locale=*`, config)
      .then((response) => {
        let Array = [];
        for (let i = 0; i < response.data._embedded.events.length; i++) {
          if (i % 4 === 0) {
            Array.push(response.data._embedded.events[i]);
          }
          if (i === 2) Car.push(response.data._embedded.events[i]);
        }
        setSports(Array);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=concert&latlong=${locationLatLon}&locale=*`, config)
      .then((response) => {
        let Array = [];
        for (let i = 0; i < response.data._embedded.events.length; i++) {
          if (i % 4 === 0) {
            Array.push(response.data._embedded.events[i]);
          }
          if (i === 2) Car.push(response.data._embedded.events[i]);
        }
        setConcert(Array);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=art&latlong=${locationLatLon}&locale=*`, config)
      .then((response) => {
        let Array = [];
        for (let i = 0; i < response.data._embedded.events.length; i++) {
          if (i % 4 === 0) {
            Array.push(response.data._embedded.events[i]);
          }
          if (i === 2) Car.push(response.data._embedded.events[i]);
        }
        setArt(Array);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=family&latlong=${locationLatLon}&locale=*`, config)
      .then((response) => {
        let Array = [];
        for (let i = 0; i < response.data._embedded.events.length; i++) {
          if (i % 4 === 0) {
            Array.push(response.data._embedded.events[i]);
          }
          if (i === 2) Car.push(response.data._embedded.events[i]);
        }
        setFamily(Array);
      })
      .catch((error) => {
        console.log(error);
      });
    setCarousel(Car);
  }, [locationLatLon]);

  console.log(carousel);

  // console.log(sports, "sports");
  // setSports();
  // console.log(family, "family");

  return (
    <div>
      {/* HomePage: {locationLatLon} */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mx-4">
        <div className="w-full lg:w-full">
          <div className="w-full flex flex-row justify-center">
            <HomeLabel text={"Family"} />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center">
            <EventItem item={family[0]} index={100} />
            <div className="flex flex-col">
              {family.map((items, index) => {
                if (index === 0) return null;
                return <EventItem key={index} item={items} index={index} />;
              })}
            </div>
          </div>
          <div className="w-full flex flex-row justify-center">
            <HomeLabel text={"Arts & Theater"} />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center">
            <EventItem item={art[0]} index={100} />
            <div className="flex flex-col">
              {art.map((items, index) => {
                if (index === 0) return null;
                return <EventItem key={index} item={items} index={index} />;
              })}
            </div>
          </div>
          <div className="w-full flex flex-row justify-center">
            <HomeLabel text={"Concert"} />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center">
            <EventItem item={concert[0]} index={100} />
            <div className="flex flex-col">
              {concert.map((items, index) => {
                if (index === 0) return null;
                return <EventItem key={index} item={items} index={index} />;
              })}
            </div>
          </div>
          <div className="w-full flex flex-row justify-center">
            <HomeLabel text={"Sports"} />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 justify-center">
            <EventItem item={sports[0]} index={100} />
            <div className="flex flex-col">
              {sports.map((items, index) => {
                if (index === 0) return null;
                return <EventItem key={index} item={items} index={index} />;
              })}
            </div>
          </div>
        </div>
        {/* <div className="w-[20rem] lg:w-[30rem]">
            {family.map((items, index) => {
              return <HomeItem key={index} item={items} />;
            })}
          </div> */}
      </div>
      <Background />
    </div>
  );
}

// USE EFFECT
// const [sports, setSports] = React.useState([]);
// const [concert, setConcert] = React.useState([]);
// const [family, setFamily] = React.useState([]);
// const [art, setArt] = React.useState([]);

// React.useEffect(() => {
//   const config = {
//     "Access-Control-Allow-Origin": "*",
//   };

//   axios
//     .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=sports&latlong=${locationLatLon}&locale=*`, config)
//     .then((response) => {
//       let Array = [];
//       for (let i = 0; i < response.data._embedded.events.length; i++) {
//         if (i % 6 === 0) {
//           Array.push(response.data._embedded.events[i]);
//         }
//       }
//       setSports(Array);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   axios
//     .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=concert&latlong=${locationLatLon}&locale=*`, config)
//     .then((response) => {
//       let Array = [];
//       for (let i = 0; i < response.data._embedded.events.length; i++) {
//         if (i % 5 === 0) {
//           Array.push(response.data._embedded.events[i]);
//         }
//       }
//       setConcert(Array);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   axios
//     .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=art&latlong=${locationLatLon}&locale=*`, config)
//     .then((response) => {
//       let Array = [];
//       for (let i = 0; i < response.data._embedded.events.length; i++) {
//         if (i % 5 === 0) {
//           Array.push(response.data._embedded.events[i]);
//         }
//       }
//       setArt(Array);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   axios
//     .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=family&latlong=${locationLatLon}&locale=*`, config)
//     .then((response) => {
//       let Array = [];
//       for (let i = 0; i < response.data._embedded.events.length; i++) {
//         if (i % 5 === 0) {
//           Array.push(response.data._embedded.events[i]);
//         }
//       }
//       setFamily(Array);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, [locationLatLon]);
