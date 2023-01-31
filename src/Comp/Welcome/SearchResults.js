import React, { useEffect, useRef } from "react";
import axios from "axios";
import Footer from "../Footer/FooterBase";
import HomeLabel from "../Home/HomeLabel";
import { FaPlus } from "react-icons/fa";

const apiKey = process.env.REACT_APP_TM_API;

export default function SearchResults({ input, setSaved, saved }) {
  console.log(input);
  const inputList = useRef();
  const [inputResponse, setInputResponse] = React.useState([]);

  useEffect(() => {
    const config = {
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=${apiKey}&keyword=${input.name}&locale=*`, config)
      .then((response) => {
        // console.log(response)
        inputList.current = response;
        console.log(inputList.current);
        setInputResponse(inputList.current.data._embedded.attractions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);
  console.log(inputResponse);

  function setSave(name, id) {
    console.log("texg");
    if (saved[0].name === "Loading") {
      setSaved(saved.splice(0, 1));
    }
    if (saved.length === 0) {
      setSaved([
        {
          "name": name,
          "id": id,
        },
      ]);
    } else {
      setSaved([
        ...saved,
        {
          "name": name,
          "id": id,
        },
      ]);
    }
  }

  return (
    <>
      <div className="w-screen bg-slate-300 flex flex-col gap-2 p-4">
        <HomeLabel text={"Search Results"} />
        {inputResponse.map((item, index) => {
          return (
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <img src={item.images[0].url} className="w-6 h-6 rounded-full" alt=" " />
                <span>{item.name}</span>
              </div>
              <div
                className="flex flex-row gap-2 w-6 h-6"
                onClick={() => {
                  setSave(item.name, item.id);
                }}
              >
                <FaPlus />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
