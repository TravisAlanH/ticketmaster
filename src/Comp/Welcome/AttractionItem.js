import React from "react";

export default function AttractionItem({ saved, setSaved, item }) {
  function deleteItem(idRemove) {
    let newSaved = [];
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].id !== idRemove) {
        newSaved.push(saved[i]);
      }
    }
    setSaved(newSaved);
  }
  let name = item.name;
  if (item.name.length > 18) name = item.name.match(/[\s\S]{1,16}/g)[0] + "...";

  return (
    <div className="flex flex-row justify-start w-full pl-12">
      <button className="mr-2" onClick={() => deleteItem(item.id)}>
        X
      </button>
      <p>{name}</p>
    </div>
  );
}
