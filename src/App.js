import React, { useEffect, useState } from "react";

import axios from "axios";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {

  const [data, setData] = useState({});

  const mainWebData = (val) => {
    setData(val)
  }

  return (
    <div>
      <Navbar powerStatsData={data} />
      <LandingScreen getPowerStatsData={(data) => mainWebData(data)} />
      <Footer />
    </div>
  );
}

export default App;
