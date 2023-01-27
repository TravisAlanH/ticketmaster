import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "./Comp/Welcome/Welcome";
import NavBase from "./Comp/Nav/NavBase";
import RoutePath from "./Routes/RoutePath";
import Background from "./Comp/Nav/Background";

function App() {
  const [Home, setHome] = React.useState(true);
  const [Links, setLinks] = React.useState([]);
  const [saved, setSaved] = React.useState([
    {
      "name": "Loading",
      "id": "Loading",
    },
  ]);
  const [inputItem, setInputItem] = React.useState({ name: "Search", id: "home" });

  const [locationLatLon, setLocation] = React.useState("36.1716,115.1391");

  let WelcomePage;
  if (Home) {
    WelcomePage = <Welcome setHome={setHome} Home={Home} saved={saved} setSaved={setSaved} inputItem={inputItem} setInputItem={setInputItem} setLinks={setLinks} />;
  }
  return (
    <div className="w-full h-full">
      <Background />
      {/* {WelcomePage} */}
      <Router>
        <NavBase setHome={setHome} Home={Home} saved={Links} setLocation={setLocation} />
        <div className="-translate-y-[14rem]">
          {WelcomePage}
          <RoutePath saved={saved} locationLatLon={locationLatLon} inputItem={inputItem} />
        </div>
      </Router>
    </div>
  );
}

export default App;
