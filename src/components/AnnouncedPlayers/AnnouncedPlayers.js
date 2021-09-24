import React, { useEffect, useState } from "react";
import { Text } from "../../common";
import { io } from "socket.io-client";
import axios from "axios";

var selectedTeam = 0;
var matchKey = "";

const AnnouncedPlayers = (props) => {
  const [btn, setBtn] = useState(true);
  const [activeTeamData, setActiveTeamData] = useState([]);
  const [anouncedPlayers, setAnouncedPlayers] = useState({});

  const handleBtnClick = (flag, teamName, index) => {
    setActiveTeamData(anouncedPlayers[matchKey][teamName]);
    setBtn(flag, teamName);
    selectedTeam = index;
  };
  const [ws, setWS] = useState(null);
  const [teamsdata, setTeamsData] = useState([]);

  useEffect(() => {
    axios
      .post("https://hapi.utter.ai/api/v1.0/getCurrentPlayingXI", null, {
        headers: {
          // Authorization: `Bearer ${window.utter_token}`
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVdHRlckFJIiwidXNlciI6eyJ1c2VybmFtZSI6IndlYnBsYXRmb3JtQVBJIiwicm9sZSI6InJlc3RDbGllbnQifSwiaWF0IjoxNjMyNTEyNDAwLCJpZCI6IlFkZlRyMDM0NEdkdzhibSIsImV4cCI6MTYzMjU5ODgwMH0.rNW_gp3yxD-T4qeEHWKK1YSbN-qwVoM9Q8Wx8XlniH0'}`
        }
      })
      .then((results) => {
        for (var match_key in results.data.current_match_playingxi) {
          matchKey = match_key;
          var teams = results.data.current_match_playingxi[match_key];
          if (Object.keys(teams).length) {
            //means teams is defined and player list is there
            setTeamsData(
              Object.keys(results.data.current_match_playingxi[matchKey])
            );
            setActiveTeamData(
              results.data.current_match_playingxi[matchKey][
              Object.keys(results.data.current_match_playingxi[matchKey])[
              selectedTeam
              ]
              ]
            );
            setAnouncedPlayers(results.data.current_match_playingxi);
          } else {
            //means empty object
            setWS(createWebScoket("wss://hapi.utter.ai/matchupdates"));
          }
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const createWebScoket = (url) => {
    let ws = new WebSocket(url);
    ws.onopen = () => { };

    ws.onmessage = (evt) => {
      var announced_players_data;
      let isMatched = null;
      var announced_players_data = evt.data;
      let getCalculatedData = calculateData(announced_players_data);
      if (activeTeamData.length == 0) {
        if (getCalculatedData) {
          if (Object.keys(getCalculatedData).length > 0) {
            if (getCalculatedData.havingPlayingData) {
              matchKey = Object.keys(getCalculatedData.playing11Data)[0];
              setAnouncedPlayers(getCalculatedData.playing11Data);
              if (Object.keys(getCalculatedData.playing11Data).includes(matchKey)) {
                isMatched = true;
              } else {
                isMatched = false;
              }
              if (isMatched) {
                if (Object.keys(getCalculatedData.playing11Data[matchKey]).length > 0) {
                  setTeamsData(Object.keys(getCalculatedData.playing11Data[matchKey]));
                  setActiveTeamData(
                    getCalculatedData.playing11Data[matchKey][
                    Object.keys(getCalculatedData.playing11Data[matchKey])[selectedTeam]
                    ]
                  );
                } else {
                  setTeamsData([]);
                  setActiveTeamData([]);
                }
              } else {
                setTeamsData([]);
                setActiveTeamData([]);
              }
            } else {
              setTeamsData([]);
              setActiveTeamData([]);
            }
          }
        }

      }
    };
    ws.onclose = () => {
      // automatically try to connect on connection loss
      setWS(createWebScoket(url));
    };

    return ws;
  };

  const calculateData = (data) => {
    let tossData, playing11Data;
    if (!!data) {
      if (Object.keys(data).length > 0) {
        Object.keys(data).map((el, index) => {
          if (el == 'toss') {
            if (Object.keys(data[el]).length > 0) {
              Object.keys(data[el]).map((el2, index2) => {
                if (!!data[el][el2].str) {
                  tossData = data[el][el2].str;
                  console.log('Toss having data...');
                } else {
                  console.log('No data found in Toss 2...');
                }
              })
            } else {
              console.log('No data found in Toss 1...');
            }
          } else if (el == 'playingxi') {
            if (Object.keys(data[el]).length > 0) {
              Object.keys(data[el]).map((case2el, case2Index) => {
                if (Object.keys(data[el][case2el]).length > 0) {
                  playing11Data = data[el];
                  console.log('Playing11 having data...');
                } else {
                  console.log('No data found in Playing11 2...');
                }
              })
            } else {
              console.log('No data found in Playing11...');
            }
          }
        });
      }
    }
    if (!!tossData && !!playing11Data) {
      let data = {
        'tossData': tossData,
        'playing11Data': playing11Data,
        'havingPlayingData': true,
        'havingTossData': true,
      }
      return {
        ...data
      }
    } else if (!!tossData) {
      let data = {
        'tossData': tossData,
        'havingPlayingData': false,
        'havingTossData': true,
      }
      return {
        ...data
      }
    } else if (!!playing11Data) {
      let data = {
        'playing11Data': playing11Data,
        'havingPlayingData': true,
        'havingTossData': false,
      }
      return {
        ...data
      }
    } else if (!tossData && !playing11Data) {
      return false
    }
  }

  return (
    <div className="p-2 py-2 rounded-md space-y-2 sm:h-72">
      {!!props.hideTitle ? (
        ""
      ) : (
        <Text
          fontFamily="Roboto Condensed"
          class="text-sm font-semibold pb-1"
          text="Announced Players"
          fontColor="#283574"
        />
      )}
      {teamsdata && teamsdata.length > 0 ? (
        <div className="flex justify-center -space-x-2">
          <button
            onClick={() => handleBtnClick(true, teamsdata[0], 0)}
            className={`bg-gray-100 w-32  ${btn && "shadow-md border z-10 rounded-md"
              } `}
          >
            <Text
              fontFamily="Roboto Condensed"
              class="text-sm font-bold"
              text={teamsdata[0] || ""}
              fontColor="#283574"
            />
          </button>
          <button
            onClick={() => handleBtnClick(false, teamsdata[1], 1)}
            className={`bg-gray-100 w-32  rounded-md ${!btn && "shadow-md border z-10 rounded-md"
              } `}
          >
            <Text
              fontFamily="Roboto Condensed"
              class="text-sm font-bold"
              text={teamsdata[1] || ""}
              fontColor="#656666"
            />
          </button>
        </div>
      ) : (
        <div className="text-center  text-gray-500 text-sm font-bold">
          Yet to be announced
        </div>
      )}

      <div className="grid grid-cols-3 space-x-2 space-y-2 sm:space-y-4 sm:px-4 sm:space-x-4">
        {activeTeamData && activeTeamData.map((el, index) => (
          <div
            className="flex justify-between bg-gray-100 border mt-2 sm:mt-4 ml-2 pl-2 sm:ml-4 sm:pl-4"
            key={index}
          >
            <div className="block sm:hidden flex justify-center items-center">
              <Text
                fontFamily="Roboto Condensed"
                class="font-medium"
                text={el}
                fontColor="#283574"
                fontSize="0.5rem"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="hidden sm:block">
                <Text
                  fontFamily="Roboto Condensed"
                  class="font-medium"
                  text={el}
                  fontColor="#283574"
                  fontSize="0.7rem"
                />
              </div>
            </div>
            {/* <div className="flex items-center">
              {el.isCaptain && (
                <div className="bg-red-600 text-white rounded-full flex items-center justify-center w-3 h-3">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-white"
                    text="c"
                    fontSize="0.7rem"
                  />
                </div>
              )}
              <div>
                <img
                  className="w-5 sm:w-7"
                  src={`https://utterai.s3.ap-south-1.amazonaws.com/img/widget/${el.playerRole === "bowler"
                    ? "ball.svg"
                    : el.playerRole === "keeper"
                      ? "keeper.svg"
                      : el.playerRole === "allRounder"
                        ? "allrounder.svg"
                        : "bat.svg"
                    }`}
                />
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncedPlayers;
