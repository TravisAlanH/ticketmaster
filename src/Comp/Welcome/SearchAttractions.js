import React from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TM_API;

export default function SearchAttractions({ setSaved, saved, setInputItem, inputItem }) {
  const [AttractionList, setAttractionList] = React.useState([]);

  let error = false;

  function setInput(name, id) {
    document.getElementById("Input").value = name;
    document.getElementById("DropDown").classList.replace("block", "hidden");

    if (saved[0].name === "Loading") {
      console.log("empty");
      // let emptyArray = [];
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

    setInputItem({
      "name": name,
      "id": id,
    });
  }

  // function AddToSaved(name, id) {
  //   document.getElementById("Input").value = name;
  //   setAttractionList([]);
  //   document.getElementById("DropDown").classList.replace("block", "hidden");
  //   // console.log(saved[0].name);
  //   if (saved[0].name === "Loading") {
  //     console.log("empty");
  //     // let emptyArray = [];
  //     setSaved(saved.splice(0, 1));
  //   }

  // setSaved([
  //   ...saved,
  //   {
  //     "name": name,
  //     "id": id,
  //   },
  // ]);
  // }

  function AttractionListBuild(e) {
    e = e.split(" ").join("%20");
    let holdArray = [];
    let responseArray = new Array(30);

    if (e.length !== 0) {
      document.getElementById("DropDown").classList.replace("hidden", "block");

      const config = {
        "Access-Control-Allow-Origin": "*",
      };

      axios
        .get(`https://app.ticketmaster.com/discovery/v2/attractions?apikey=${apiKey}&keyword=${e}&locale=*`, config)
        .then((response) => {
          // response.header("Access-Control-Allow-Origin", "*");
          responseArray = response.data._embedded.attractions;
          error = true;
          if (error) setAttractionList([]);
          for (let i = 0; i < responseArray.length; i++) {
            holdArray[i] = responseArray[i];
            if (i > 5) {
              i = responseArray.length;
            }
          }
          if (error) setAttractionList(holdArray);
        })
        .catch((ResponseError) => {
          error = false;
          console.log(ResponseError);
        });
    } else {
      setAttractionList([]);
      document.getElementById("DropDown").classList.replace("block", "hidden");
    }
  }

  return (
    <div>
      <form className="relative inline-block">
        <input
          type={"text"}
          className="w-[15rem]"
          id="Input"
          name="FindAttraction"
          placeholder={inputItem.name}
          onChange={(e) => {
            AttractionListBuild(e.target.value);
          }}
        />
        <div id="DropDown" className="hidden absolute overflow-auto z-10 bg-gray-200 -translate-x-20 border border-black p-4 rounded-lg">
          {AttractionList.map((items, index) => {
            let name = items.name;
            if (items.name.length > 33) name = items.name.match(/[\s\S]{1,30}/g)[0] + "...";
            return (
              <div
                className="w-80 h-auto border hover:bg-gray-400 flex flex-row justify-between py-1 border-b-gray-400"
                key={index}
                onClick={() => {
                  // AddToSaved(items.name, items.id);
                  setInput(items.name, items.id);
                }}
              >
                <div>{name}</div>
                <div>{items.upcomingEvents._total}</div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
