import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Welcome from "./Comp/Welcome/Welcome";
import NavBase from "./Comp/Nav/NavBase";
import RoutePath from "./Routes/RoutePath";

function App() {
  const [Home, setHome] = React.useState(true);
  const [saved, setSaved] = React.useState([
    {
      "name": "Loading",
      "id": "Loading",
    },
  ]);

  let WelcomePage;
  if (Home) {
    WelcomePage = <Welcome setHome={setHome} Home={Home} saved={saved} setSaved={setSaved} />;
  }
  return (
    <div className="w-screen h-screen">
      {WelcomePage}
      <Router>
        <NavBase setHome={setHome} Home={Home} saved={saved} />
        <RoutePath saved={saved} />
      </Router>
    </div>
  );
}

export default App;
