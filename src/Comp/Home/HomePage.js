import React from "react";
import axios from "axios";
import sportTest from "../TestingData/Sports";
// import concertTest from "../TestingData/Concert";
// import artTest from "../TestingData/Art";
// import familyTest from "../TestingData/Family";
import SportsItem from "./SportsItem";

const apiKey = process.env.REACT_APP_TM_API;

export default function HomePage({ locationLatLon }) {
  const [sports, setSports] = React.useState(sportTest);
  // const [concert, setConcert] = React.useState(concertTest);
  // const [family, setFamily] = React.useState(familyTest);
  // const [art, setArt] = React.useState(artTest);

  React.useEffect(() => {
    const config = {
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=sports&latlong=${locationLatLon}&locale=*`, config)
      .then((response) => {
        let Array = [];
        for (let i = 0; i < response.data._embedded.events.length; i++) {
          if (i % 6 === 0) {
            Array.push(response.data._embedded.events[i]);
          }
        }
        setSports(Array);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=concert&latlong=${locationLatLon}&locale=*`, config)
    //   .then((response) => {
    //     let Array = [];
    //     for (let i = 0; i < response.data._embedded.events.length; i++) {
    //       if (i % 5 === 0) {
    //         Array.push(response.data._embedded.events[i]);
    //       }
    //     }
    //     setConcert(Array);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios
    //   .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=art&latlong=${locationLatLon}&locale=*`, config)
    //   .then((response) => {
    //     let Array = [];
    //     for (let i = 0; i < response.data._embedded.events.length; i++) {
    //       if (i % 5 === 0) {
    //         Array.push(response.data._embedded.events[i]);
    //       }
    //     }
    //     setArt(Array);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios
    //   .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&keyword=family&latlong=${locationLatLon}&locale=*`, config)
    //   .then((response) => {
    //     let Array = [];
    //     for (let i = 0; i < response.data._embedded.events.length; i++) {
    //       if (i % 5 === 0) {
    //         Array.push(response.data._embedded.events[i]);
    //       }
    //     }
    //     setFamily(Array);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [locationLatLon]);

  // console.log(sports, "sports");
  // setSports();
  // console.log(family, "family");

  return (
    <div>
      HomePage: {locationLatLon}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        <div className="grid grid-rows-1 lg:grid-cols-2 gap-4 gap-y-4">
          <div className="w-[20rem] lg:w-[30rem]">
            {sports.map((items, index) => {
              return <SportsItem key={index} item={items} />;
            })}
          </div>
          {/* <div className="w-[20rem] lg:w-[30rem]">
            {family.map((items, index) => {
              return <HomeItem key={index} item={items} />;
            })}
          </div> */}
        </div>
        <div className="w-[20rem]">asdf</div>
      </div>
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
