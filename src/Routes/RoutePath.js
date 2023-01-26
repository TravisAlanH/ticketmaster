import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Page from "../Comp/AttractionPage/Page";
export default function RoutePath({ saved }) {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
      {saved.map((item, index) => {
        let link = `/${item.id}`;
        return <Route exact path={link} element={<Page Attraction={item} />}></Route>;
      })}
    </Routes>
  );
}

//Navigate

//"TMAttractions"
