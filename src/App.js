import React, { useState } from "react";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {

  return (
    <div>
      <Navbar />
      <LandingScreen />
      <Footer />
    </div>
  );
}

export default App;
