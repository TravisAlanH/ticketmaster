import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "./Comp/Welcome/Welcome";
import NavBase from "./Comp/Nav/NavBase";
import RoutePath from "./Routes/RoutePath";

function App() {
  const [Home, setHome] = React.useState(false);
  const [saved, setSaved] = React.useState([
    {
      "name": "Loading",
      "id": "Loading",
    },
  ]);
  const [locationLatLon, setLocation] = React.useState("36.1716,115.1391");

  let WelcomePage;
  if (Home) {
    WelcomePage = <Welcome setHome={setHome} Home={Home} saved={saved} setSaved={setSaved} />;
  }
  return (
    <div className="w-full h-full">
      {WelcomePage}
      <Router>
        <NavBase setHome={setHome} Home={Home} saved={saved} setLocation={setLocation} />
        <div className="pt-16">
          <RoutePath saved={saved} locationLatLon={locationLatLon} />
        </div>
      </Router>
    </div>
  );
}

export default App;
