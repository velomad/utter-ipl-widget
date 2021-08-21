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
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="mx-4 mt-8 grid grid-cols-2 gap-3">
        <div>
          <GroundInsights />
        </div>
        <div>
          <PitchInsights />
        </div>
      </div>
      <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
        <div>
          <TossInsights />
        </div>
        <div>
          <AnnouncedPlayers />
        </div>
      </div>
      <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
        <div>
          <HeadToHead />
        </div>
        <div>
          <TopPerformers />
        </div>
      </div>
      <div className="mx-4 mt-4">
        <PlayingTeam />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
