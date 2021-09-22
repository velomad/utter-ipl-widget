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
    setActiveTeamData(anouncedPlayers.iplt20_2021_g032[teamName]);
    setBtn(flag, teamName);
    selectedTeam = index;
  }
  const [ws, setWS] = useState(null);
  const [teamsdata, setTeamsData] = useState([]);

  useEffect(() => {
    axios
      .post("https://hapi.utter.ai/api/v1.0/getCurrentPlayingXI", null, {
        headers: {
          // Authorization: `Bearer ${window.utter_token}`
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVdHRlckFJIiwidXNlciI6eyJ1c2VybmFtZSI6IndlYnBsYXRmb3JtQVBJIiwicm9sZSI6InJlc3RDbGllbnQifSwiaWF0IjoxNjMyMjQ2NTY0LCJpZCI6IlFkZlRyMDM0NEdkdzhibSIsImV4cCI6MTYzMjMzMjk2NH0.AzkorK0AZWEw1XaSp-Q34qjMAEqRbEG_l3nMeibC_WM'}`
        }
      })
      .then((results) => {
        for (var match_key in results.data.current_match_playingxi) {
          matchKey= match_key;
          var teams = results.data.current_match_playingxi[match_key];
          if (Object.keys(teams).length) {
            //means teams is defined and player list is there
            setTeamsData(Object.keys(results.data.current_match_playingxi[matchKey]));
            setActiveTeamData(results.data.current_match_playingxi[matchKey][Object.keys(results.data.current_match_playingxi[matchKey])[selectedTeam]]);
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
    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      var announced_players_data;
      let isMatched = null;
      if (!!localStorage.getItem('announced_players_data')) {
        console.log('Found data');
        announced_players_data = JSON.parse(localStorage.getItem('announced_players_data'));
        if (Object.keys(announced_players_data).includes(matchKey)) {
          isMatched = true;
        } else {
          isMatched = false;
        }
      }
      if (isMatched) {
        setTeamsData(Object.keys(announced_players_data[matchKey]));
        setActiveTeamData(announced_players_data[matchKey][Object.keys(announced_players_data[matchKey])[selectedTeam]]);
      } else {
        localStorage.setItem('announced_players_data', evt.data);
        var announced_players_data = JSON.parse(localStorage.getItem('announced_players_data'));
        setAnouncedPlayers(announced_players_data);
        console.log("announced_players_data============>", announced_players_data);
        if (Object.keys(announced_players_data).includes(matchKey)) {
          isMatched = true;
        } else {
          isMatched = false;
        }
        if (isMatched) {
          setTeamsData(Object.keys(announced_players_data[matchKey]));
          setActiveTeamData(announced_players_data[matchKey][Object.keys(announced_players_data[matchKey])[selectedTeam]]);
        } else {
          setTeamsData([]);
          setActiveTeamData([]);
        }
      }
      console.log('Not Found data');
      localStorage.setItem('announced_players_data', evt.data);
      var announced_players_data = JSON.parse(localStorage.getItem('announced_players_data'));
      setAnouncedPlayers(announced_players_data);
      console.log("announced_players_data============>", announced_players_data);
      if (Object.keys(announced_players_data).includes(matchKey)) {
        isMatched = true;
      } else {
        isMatched = false;
      }
      if (isMatched) {
        setTeamsData(Object.keys(announced_players_data[matchKey]));
        setActiveTeamData(announced_players_data[matchKey][Object.keys(announced_players_data[matchKey])[selectedTeam]]);
      } else {
        setTeamsData([]);
        setActiveTeamData([]);
      }
    };

    ws.onclose = () => {
      console.log("disconnected");
      // automatically try to connect on connection loss
      setWS(createWebScoket(url));
    };

    return ws;
  };


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
      {
        teamsdata.length > 0 ?
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
          </div> : <div className="text-center  text-gray-500 text-sm font-bold">Yet to be announced</div>
      }


      <div className="grid grid-cols-3 space-x-2 space-y-2 sm:space-y-4 sm:px-4 sm:space-x-4">
        {activeTeamData.map((el, index) => (
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
