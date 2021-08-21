import React from "react";
import {
  AnnouncedPlayers,
  GroundInsights,
  HeadToHead,
  PitchInsights,
  PlayingTeam,
  TopPerformers,
  TossInsights,
} from "./components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mx-4 mt-8 grid grid-cols-2 gap-5">
        <div>
          <GroundInsights />
        </div>
        <div>
          <PitchInsights />
        </div>
      </div>
      <div className="mx-4 mt-8 grid grid-cols-2 gap-5">
        <div>
          <TossInsights />
        </div>
        <div>
          <AnnouncedPlayers />
        </div>
      </div>
      <div className="mx-4 mt-8 grid grid-cols-2 gap-5">
        <div>
          <HeadToHead />
        </div>
        <div>
          <TopPerformers />
        </div>
      </div>
      <div className="mx-4 mt-8 ">
        <PlayingTeam />
      </div>

    </div>
  );
}

export default App;
