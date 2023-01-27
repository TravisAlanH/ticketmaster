import React from "react";

export default function AttractionItem({ saved, setSaved, item }) {
  function deleteItem(idRemove) {
    let newSaved = [];
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].id !== idRemove) {
        newSaved.push(saved[i]);
      }
    }
    if (newSaved.length === 0) {
      setSaved([
        {
          "name": "Loading",
          "id": "Loading",
        },
      ]);
    } else {
      setSaved(newSaved);
    }
  }
  let name = item.name;
  if (item.name.length > 18) name = item.name.match(/[\s\S]{1,16}/g)[0] + "...";

  return (
    <div className="flex flex-row justify-center w-48 px-2 py-1 mx-1 bg-[#112553f8] text-white rounded-full">
      <button className="mr-2" onClick={() => deleteItem(item.id)}>
        X
      </button>
      <p className="">{name}</p>
    </div>
  );
}
