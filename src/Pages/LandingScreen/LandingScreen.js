import React from "react";
import {
  AnnouncedPlayers,
  GroundInsights,
  HeadToHead,
  PitchInsights,
  PlayingTeam,
  TopPerformers,
  TossInsights,
} from "../../components";

const LandingScreen = () => {
  return (
    <div>
      <div className="App">
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
        <div className="md:px-40 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-5 sm:space-y-0">
          {/* <div>
          <HeadToHead />
        </div> */}
          <div className="md:hidden">
            <TopPerformers />
          </div>
        </div>
        <div className="md:px-40 mt-4">
          <PlayingTeam />
        </div>
        {/* <div className="md:px-40 mt-4">
        <InterestingInsights />
      </div> */}
        <div className="mt-8">
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
