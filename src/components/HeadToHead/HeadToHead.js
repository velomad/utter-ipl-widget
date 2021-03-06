import React, { useEffect } from "react";
import { Text } from "../../common";
import { getFirstCharacter } from "../../utils/getFirstCharacter";

export default function Headtohead(props) {
  let team1 = {};
  let team2 = {};

  if (props.teamMatches) {
    team1["teamName"] = props.teamMatches[0].ForTeam;
    team1["matchesWon"] = props.teamMatches[0].MatchesWon;
    team1["noResults"] = props.teamMatches[0].NoResults;
    team1["results"] = props.teamMatches[0].Results;
    team1["winPercent"] = props.teamMatches[0].WinPercent;

    team2["teamName"] = props.teamMatches[1].ForTeam;
    team2["matchesWon"] = props.teamMatches[1].MatchesWon;
    team2["noResults"] = props.teamMatches[1].NoResults;
    team2["results"] = props.teamMatches[1].Results;
    team2["winPercent"] = props.teamMatches[1].WinPercent;
  }

  return (
    <React.Fragment>
      <div className="main-container h-72 sm:border px-4 py-2 w-full sm:p-2 sm:pl-2 rounded-md gradient-bk">
        <Text
          fontFamily="Roboto Condensed"
          class="text-sm font-semibold pb-1"
          text="Head-to-Head"
          fontColor="#283574"
        />
        <div className="grid grid-cols-10 relative">
          <div class="col-span-4 ">
            <div className="flex justify-start h-24">
              <div className="absolute bottom-0 " style={{ left: "4.5rem" }}>
                <img
                  className=" z-0 w-14 sm:w-20 object-cover object-center mx-auto"
                  src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
                    team1.teamName && getFirstCharacter(team1.teamName)
                  }.JPG`}
                  // src={`https://utterai.s3.ap-south-1.amazonaws.com/team/img/${
                  //   team1.teamName.replace(/\s/g, "_") + ".JPG"
                  // }`}
                  alt="team 1"
                />
              </div>
              <div className="absolute">
                <img
                  class="z-10 w-16 object-cover object-center mx-auto"
                  src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
                    team1.teamName && getFirstCharacter(team1.teamName)
                  }_C.JPG`}
                  alt="player1"
                />
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <Text
              fontFamily="Roboto Condensed"
              class="font-bold text-center"
              text={`Matches Played : ${
                props.teamMatches && props.teamMatches[0]?.MatchesPlayed
              }`}
              fontColor="#283574"
              fontSize="0.6rem"
            />
            <Text
              fontFamily="Roboto Condensed"
              class="text-sm font-bold text-center mt-8"
              text="VS"
              fontColor="#283574"
            />
          </div>
          <div class="col-span-4">
            <div className="flex flex-row justify-end  h-24">
              <div className="absolute bottom-0 right-16">
                <img
                  class="z-0 w-14 sm:w-20 object-cover object-center mx-auto"
                  // src="/static/images/rcb_logo.png"
                  src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
                    team2.teamName && getFirstCharacter(team2.teamName)
                  }.JPG`}
                  alt="player2"
                />
              </div>
              <div className="absolute">
                <img
                  class="z-10 w-28 object-cover object-center mx-auto"
                  src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${
                    team2.teamName && getFirstCharacter(team2.teamName)
                  }_C.JPG`}
                  alt="player1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div class="col-span-4 mt-4 space-y-2">
            <Text
              fontFamily="Roboto Condensed"
              class="text-md font-bold text-center"
              text={team1.matchesWon}
              fontColor={
                team1.matchesWon > team2.matchesWon ? "#197F5C" : "#9F1C34"
              }
            />
            <div>
              <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/66.png" className="mx-auto" />
            </div>

            <div className="flex flex-row justify-center items-center space-x-1">
              {team1.results?.map((res, index) => (
                <div className="bg-gray-200 w-5 rounded-full">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="font-bold text-sm text-center"
                    text={res === 0 ? "L" : "W"}
                    fontColor={res === 1 ? "#197F5C" : "#9F1C34"}
                  />
                </div>
              ))}
              {/* <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily="Roboto Condensed"
                  class="font-bold text-sm text-center"
                  text="W"
                  fontColor="#197F5C"
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily="Roboto Condensed"
                  class="font-bold text-sm text-center"
                  text="L"
                  fontColor="#9F1C34"
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily="Roboto Condensed"
                  class="font-bold text-sm text-center"
                  text="L"
                  fontColor="#9F1C34"
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily="Roboto Condensed"
                  class="font-bold text-sm text-center"
                  text="W"
                  fontColor="#197F5C"
                />
              </div> */}
            </div>
          </div>
          <div class="col-span-4">
            <Text
              fontSize="0.7rem"
              fontFamily="Roboto Condensed"
              class="font-bold text-center mt-1"
              text="Matches Won"
              fontColor="#656666"
            />
            <Text
              fontSize="0.7rem"
              fontFamily="Roboto Condensed"
              class="font-bold text-center mt-7"
              text="Win %"
              fontColor="#656666"
            />
            <Text
              fontSize="0.7rem"
              fontFamily="Roboto Condensed"
              class="font-bold text-center mt-7"
              text="Last 5 Matches"
              fontColor="#656666"
            />
            <Text
              fontSize="0.6rem"
              fontFamily="Roboto Condensed"
              class="font-bold text-center mt-2"
              text={`No Result: ${team1.noResults}`}
              fontColor="#283574"
            />
          </div>
          <div class="col-span-4 mt-4 space-y-2">
            <Text
              fontFamily="Roboto Condensed"
              class="text-md font-bold text-center"
              text={team2.matchesWon}
              fontColor={
                team2.matchesWon > team1.matchesWon ? "#197F5C" : "#9F1C34"
              }
            />
            <div>
              <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/33.png" className="mx-auto" />
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              {team2.results?.map((res) => (
                <div className="bg-gray-200 w-5 rounded-full">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="font-bold text-sm text-center"
                    text={res === 0 ? "L" : "W"}
                    fontColor={res === 1 ? "#197F5C" : "#9F1C34"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
