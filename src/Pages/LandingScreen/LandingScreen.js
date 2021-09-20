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

  const getClientAuth = async () => {
    const results = await axios.get(
      `https://hapi.utter.ai/restclient/issue?clientID=${window.client_id}&domain=${window.domain_name}`
    );
    localStorage.setItem("clientAuthToken", results.data.token);
    const Utterresults = await axios.post(
      "https://hapi.utter.ai/api/v1.0/getPowerStats",
      null,
      {
        headers: {
          Authorization: `Bearer ${results.data.token}`
        }
      }
    );
    setPowerStatsData(Utterresults.data);
    getPowerStatsData(Utterresults.data);
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
