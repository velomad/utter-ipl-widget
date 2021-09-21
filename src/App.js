import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";
import ReactGA from "react-ga";

function App() {
  const history = useHistory();

  useEffect(() => {
    initGA();
  }, []);

  const initGA = () => {
    ReactGA.initialize("G-TQG3M8CN8W");
  };

  const [data, setData] = useState({});

  const mainWebData = (val) => {
    setData(val);
  };

  return (
    <div>
      <Navbar powerStatsData={data} />
      <LandingScreen getPowerStatsData={(data) => mainWebData(data)} />
      <Footer />
    </div>
  );
}

export default App;
