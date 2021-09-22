import React, { useEffect, useState } from "react";
import { Text } from "../../common";
import { imageChecker } from "../../Hooks/imageChecker";
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
  imageChecker();

  return (
    <div className="overflow-hidden">
      <div
        className={`slnt absolute overflow-hidden ${getFirstCharacter(
          teamOne
        ).toLowerCase()}-background ${getFirstCharacter(
          teamTwo
        ).toLowerCase()}-background-after`}
      ></div>
      <div className="relative z-10 flex items-center mt-2 justify-between sm:px-20 px-7">
        <img
          src={`https://utterai.s3.ap-south-1.amazonaws.com/img/widget/${
            teamOne && getFirstCharacter(teamOne)
          }.png`}
          className="w-16 object-contain"
        />
        <div className="bg-white rounded-full h-10 w-10 mt-4 -mr-1 mr-2">
          <Text
            class="text-center mt-2"
            text="VS"
            fontColor="#283574"
            fontWeight="600"
          />
        </div>
        <img
          src={`https://utterai.s3.ap-south-1.amazonaws.com/img/widget/${
            teamTwo && getFirstCharacter(teamTwo)
          }.png`}
          className="w-16 object-contain"
        />
      </div>
    </div>
  );
}

export default Navbar;
