import React, { useEffect } from "react";

import axios from "axios";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {
  useEffect(() => {
    getClientAuth();
  }, []);

  const getClientAuth = async () => {
    const results = await axios.get(
      "https://hapi.utter.ai/restclient/issue?clientID=QdfTr0344Gdw8bm&domain=testclient.com"
    );

    localStorage.setItem("clientAuthToken", results.data.token);
  };

  return (
    <div>
      <Navbar />
      <LandingScreen />
      <Footer />
    </div>
  );
}

export default App;
