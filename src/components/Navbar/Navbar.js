import React, { useEffect, useState } from "react";
import { Text } from "../../common";
import { getFirstCharacter } from "../../utils/getFirstCharacter";

function Navbar({ powerStatsData }) {
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");

  useEffect(() => {
    if (!!powerStatsData.TeamMatches) {
      setTeamOne(powerStatsData.TeamMatches[0].ForTeam);
      setTeamTwo(powerStatsData.TeamMatches[0].AgainstTeam);
    }
  }, [powerStatsData]);
  console.log(powerStatsData.TeamMatches);

  return (
    <div className="overflow-hidden">
      <div className="slnt absolute overflow-hidden"></div>
      <div className="relative z-10 flex justify-between top-2 sm:px-20 px-7">
        <img
          src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
            teamOne && getFirstCharacter(teamOne)
          }.png`}
          className="w-20 object-contain"
        />
        <div className="bg-white rounded-full h-10 w-10 mt-4 sm:mr-4 mr-10">
          <Text
            class="text-center mt-2"
            text="VS"
            fontColor="#283574"
            fontWeight="600"
          />
        </div>
        <img
          src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
            teamTwo && getFirstCharacter(teamTwo)
          }.png`}
          className="w-20 object-contain"
        />
      </div>
    </div>
  );
}

export default Navbar;
