import React, { useState } from "react";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="fixed right-10 bottom-10">
        <div
          className={` h-14 w-14 bg-red-300 rounded-full`}
          onClick={() => setShow(!show)}
        ></div>
      </div>
      <div className={`${show ? "block" : "hidden"}`}>
        <Navbar />
        <LandingScreen />
        <Footer />
      </div>
    </div>
  );
}

export default App;
