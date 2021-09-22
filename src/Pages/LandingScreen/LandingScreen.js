import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AnnouncedPlayers,
  GroundInsights,
  HeadToHead,
  PitchInsights,
  PlayingTeam,
  TopPerformers,
  TossInsights
} from "../../components";

const LandingScreen = ({ getPowerStatsData }) => {
  const [powerStatsData, setPowerStatsData] = useState({});

  useEffect(() => {
    getClientAuth();
  }, []);

  const getClientAuth = () => {
    localStorage.setItem("clientAuthToken", window.utter_token);
    axios
      .post("https://hapi.utter.ai/api/v1.0/getPowerStats", null, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVdHRlckFJIiwidXNlciI6eyJ1c2VybmFtZSI6IndlYnBsYXRmb3JtQVBJIiwicm9sZSI6InJlc3RDbGllbnQifSwiaWF0IjoxNjMyMjg2ODk5LCJpZCI6IlFkZlRyMDM0NEdkdzhibSIsImV4cCI6MTYzMjM3MzI5OX0.NytKv8mbMufu8YD4eIaQCcdq9nE1jbyN-ZfmyTtB87s"}`
        }
      })
      .then((Utterresults) => {
        setPowerStatsData(Utterresults.data);
        getPowerStatsData(Utterresults.data);
      })
      .catch((e) => console.log(e));
  };
  console.log(powerStatsData);

  return (
    <div>
      <div className="App">
        <div className="md:px-40 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-5 sm:space-y-0">
          <div>
            <GroundInsights powerStatsData={powerStatsData} />
          </div>
          <div className="hidden sm:block">
            <HeadToHead teamMatches={powerStatsData.TeamMatches} />
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
            <TopPerformers TopPerformer={powerStatsData.TopPerformer} />
          </div>
        </div>
        <div className="md:px-40 mt-4">
          <PlayingTeam powerStatsData={powerStatsData} />
        </div>
        {/* <div className="md:px-40 mt-4">
        <InterestingInsights />
      </div> */}
        <div className="mt-8"></div>
      </div>
    </div>
  );
};

export default LandingScreen;
