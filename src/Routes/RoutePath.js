import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "../Comp/Home/HomePage";
import Page from "../Comp/AttractionPage/Page";
import SearchResults from "../Comp/Welcome/SearchResults";

export default function RoutePath({ saved, locationLatLon, inputItem, setSaved }) {
  let location = useLocation();
  let SearchLink = `/${inputItem.id}`;
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route exact path="/home" element={<HomePage locationLatLon={locationLatLon} />} />
      <Route exact path="/search" element={<SearchResults input={inputItem} saved={saved} setSaved={setSaved} />} />
      <Route exact path={SearchLink} element={<Page Attraction={inputItem} />} />
      {saved.map((item, index) => {
        let link = `/${item.id}`;
        return <Route exact path={link} element={<Page Attraction={item} />} key={index} />;
      })}
    </Routes>
  );
}

//Navigate

//"TMAttractions"
