import React, { useState } from "react";
import { Footer, Navbar } from "./components";
import LandingScreen from "./Pages/LandingScreen";

function App() {
  const [show, setShow] = useState(false);
  const handleWidget = () => {
    let fakeShow = true;
    let windowElem = document.querySelector("body > div.utter-container");
    setShow(!show);
    if (fakeShow && !show) {
      windowElem.style.background = '#fff';
      windowElem.style.zIndex = '999999'
      windowElem.style.overflowY = 'scroll'
      windowElem.style.height = '100vh'
    } else {
      fakeShow = false;
      windowElem.style.background = '';
      windowElem.style.zIndex = ''
      windowElem.style.overflowY = ''
      windowElem.style.height = ''
    }
  }

  return (
    <div>
      <div className="cursor-pointer fixed right-10 bottom-10">
        <div
          className={` h-14 w-14 bg-indigo-600 flex justify-center items-center rounded-full`}
          onClick={() => handleWidget()}
        >
          {
            show? 
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            :
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          }
        </div>
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
