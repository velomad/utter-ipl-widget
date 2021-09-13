import React from "react";
import {
  AnnouncedPlayers,
  Footer,
  GroundInsights,
  HeadToHead,
  PitchInsights,
  PlayingTeam,
  TopPerformers,
  TossInsights,
} from "./components";
import InterestingInsights from "./components/InterestingInsights";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="md:px-40 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-5 sm:space-y-0">
        <div>
          <GroundInsights />
        </div>
        <div className="hidden sm:block">
          <HeadToHead />
        </div>
      </div>
      {/* <div className="md:px-40 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-5 sm:space-y-0">
        <div className="hidden sm:block">
          <TossInsights />
        </div>
        <div className="hidden sm:block">
          <AnnouncedPlayers />
        </div>
      </div> */}
      {/* <div className="md:px-40 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-5 sm:space-y-0">
        <div>
          <HeadToHead />
        </div>
        <div>
          <TopPerformers />
        </div>
      </div> */}
      <div className="md:px-40 mt-4">
        <PlayingTeam />
      </div>
      <div className="md:px-40 mt-4">
        <InterestingInsights />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
