import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "../Comp/Home/HomePage";
import Page from "../Comp/AttractionPage/Page";

export default function RoutePath({ saved, locationLatLon }) {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route exact path="/home" element={<HomePage locationLatLon={locationLatLon} />}></Route>;
      {saved.map((item, index) => {
        let link = `/${item.id}`;
        return <Route exact path={link} element={<Page Attraction={item} />} key={index}></Route>;
      })}
    </Routes>
  );
}

//Navigate

//"TMAttractions"
