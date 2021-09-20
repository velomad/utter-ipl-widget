import React, { useEffect, useState } from "react";

import axios from "axios";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {

  const [data, setData] = useState({})
  useEffect(() => {
    getClientAuth();
  }, []);

  const mainWebData = (val) => {
    setData(val)
  }



  const getClientAuth = async () => {
    const results = await axios.get(
      "https://hapi.utter.ai/restclient/issue?clientID=QdfTr0344Gdw8bm&domain=testclient.com"
    );

    localStorage.setItem("clientAuthToken", results.data.token);
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
