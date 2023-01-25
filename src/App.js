import "./App.css";
import React from "react";
import Welcome from "./Comp/Welcome/Welcome";

function App() {
  const [Home, setHome] = React.useState(true);
  const [saved, setSaved] = React.useState([]);

  let WelcomePage;
  if (Home) {
    WelcomePage = <Welcome setHome={setHome} Home={Home} saved={saved} setSaved={setSaved} />;
  }
  return (
    <div className="bg-blue-200 w-screen h-screen">
      {WelcomePage}
      <button onClick={() => setHome(!Home)}>Toggle</button>
    </div>
  );
}

export default App;
