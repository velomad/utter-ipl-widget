import React, { useState, useEffect } from "react";
import { Text } from "../../common";
import {
  PitchInsights,
  TossInsights,
  AnnouncedPlayers
} from "../../components";
import { Event } from "../../utils/tracker";
import axios from "axios";



var selectedTeam = 0;
var matchKey = "";
var isHavingSockData = false;
var dataFetchedFromAPI = false;


const GroundInsights = ({ powerStatsData }) => {
  const [activeTeamData, setActiveTeamData] = useState([]);
  const [anouncedPlayers, setAnouncedPlayers] = useState({});
  const [teamsdata, setTeamsData] = useState([]);

  const [selectedVal, setSelectedVal] = useState("ground");
  const [tossData, setTossData] = useState({});

  const mainTossData = (val) => {
    setTossData(val);
  };

  let data = {};

  const fetchSocketAPI = () => {
    axios
      .post("https://hapi.utter.ai/api/v1.0/getCurrentPlayingXI", null, {
        headers: {
          Authorization: `Bearer ${window.utter_token}`
        }
      })
      .then((results) => {
        if (Object.keys(results.data.current_match_playingxi).length > 0) {
          for (var match_key in results.data.current_match_playingxi) {
            matchKey = match_key;
            var teams = results.data.current_match_playingxi[match_key];
            if (Object.keys(teams).length) {
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
              dataFetchedFromAPI = true;
            } else {
              //means empty object
            }
          }
        } else {
          setTeamsData([]);
          setActiveTeamData([]);
          dataFetchedFromAPI = true;
        }
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    isHavingSockData = false;
    dataFetchedFromAPI = false;
    createWebScoket("wss://hapi.utter.ai/matchupdates")
  }, []);


  if (powerStatsData) {
    if (powerStatsData.GroundInsights)
      powerStatsData?.GroundInsights?.Runs.map((el) => {
        data["groundName"] = el.Venue;
        data["highestRuns"] = el.HighestRuns;
        data["lowestRuns"] = el.LowestRuns;
        data["avgRuns"] = el.AvgRuns;
      });
    powerStatsData?.GroundInsights?.Wickets.map((el) => {
      data["avgWicketPercent"] = el.AvgWicketPacer;
      data["avgWicketSpin"] = el.AvgWicketSpinner;
      data["pacerWickets"] = el.PacerWickets;
      data["spinnerWickets"] = el.SpinnerWickets;
    });

    if (powerStatsData.WeatherInsights) {
      powerStatsData?.WeatherInsights?.map((el) => {
        data["temperature"] = el.Temperature;
        data["humidity"] = el.Humidity;
      });
    }
  }

  const createWebScoket = (url) => {
    let ws = new WebSocket(url);
    ws.onopen = () => {

    };
    ws.onmessage = (evt) => {
      var announced_players_data;
      let isMatched = null;
      var announced_players_data = JSON.parse(evt.data);
      let getCalculatedData = calculateData(announced_players_data);
      if (Object.keys(getCalculatedData).length > 0) {
        if (getCalculatedData.havingTossData) {
          setTossData(getCalculatedData.tossData);
        }
      }
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
                  isHavingSockData = true;
                  dataFetchedFromAPI = false;
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
    if (!ws.onmessage || ws.readyState == 0) {
      isHavingSockData = false;
    }
    if (!isHavingSockData && !dataFetchedFromAPI) {
      fetchSocketAPI();
    }
    ws.onclose = () => {
      // automatically try to connect on connection loss
      createWebScoket(url)
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
    <React.Fragment>
      <div className="hidden h-72 sm:block p-2 border rounded-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-start space-x-3 items-center">
            <div onClick={() => setSelectedVal("ground")}>
              <Text
                class={
                  selectedVal == "ground"
                    ? "cursor-pointer text-sm text-center border-b border-red-900"
                    : "cursor-pointer text-sm text-center"
                }
                text="Ground Insights"
                fontColor={selectedVal == "ground" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div
              onClick={() => {
                setSelectedVal("pitch");
                Event("Insight", "View Pitch Insight", "Pitch Insight");
              }}
            >
              <Text
                class={
                  selectedVal == "pitch"
                    ? "cursor-pointer text-sm text-center border-b border-red-900"
                    : "cursor-pointer text-sm text-center"
                }
                text="Pitch Insights"
                fontColor={selectedVal == "pitch" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div onClick={() => setSelectedVal("toss")}>
              <Text
                class={
                  selectedVal == "toss"
                    ? "cursor-pointer text-sm text-center border-b border-red-900"
                    : "cursor-pointer text-sm text-center"
                }
                text="Toss Insights"
                fontColor={selectedVal == "toss" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div onClick={() => setSelectedVal("announcedplayers")}>
              <Text
                class={
                  selectedVal == "announcedplayers"
                    ? "cursor-pointer text-sm text-center border-b border-red-900"
                    : "cursor-pointer text-sm text-center"
                }
                text="Announced Players"
                fontColor={
                  selectedVal == "announcedplayers" ? "#283574" : "#656666"
                }
                fontWeight="600"
              />
            </div>
          </div>
        </div>

        {selectedVal == "ground" ? (
          <div className="flex justify-around items-center h-60 px-4">
            <div className="space-y-4">
              <div className="flex justify-between w-full">
                <div className="flex space-x-2 items-center">
                  <div>
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/icon-sunny.svg" />{" "}
                  </div>
                  <div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-sm inline-block font-semibold pb-1"
                      text={data.temperature}
                      fontColor="#9F1C34"
                    />
                    <div className="inline-block">
                      <sup>
                        <span>&#176;</span>
                      </sup>
                    </div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-sm inline-block font-semibold pb-1"
                      text="C"
                      fontColor="#9F1C34"
                    />
                  </div>
                </div>
                <div className="flex space-x-2 items-center">
                  <div>
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/icon-rainy.svg" />{" "}
                  </div>
                  <div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-sm inline-block font-semibold pb-1"
                      text={data.humidity + "%"}
                      fontColor="#283574"
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/stadium.png"
                  className="w-40 mx-auto"
                />
              </div>
              <div className="text-center" style={{ maxWidth: "10rem" }}>
                <Text
                  fontFamily="Roboto Condensed"
                  class="text-sm font-semibold pb-1"
                  text={data.groundName}
                  fontColor="#283574"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div>
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/batting.png" />
                </div>

                <div className="text-center border bg-gray-100 w-full rounded-md flex justify-between p-4">
                  <div>
                    <div>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-bold pb-2"
                        text={data.avgRuns}
                        fontColor="#283574"
                      />
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="font-bold"
                        text="Avg. Score "
                        fontColor="#656666"
                      />
                      <Text
                        fontFamily="Roboto Condensed"
                        class="font-bold pb-1"
                        text="1st Batting"
                        fontColor="#656666"
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-bold pb-2"
                        text={data.highestRuns}
                        fontColor="#197F5C"
                      />
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Highest "
                        fontColor="#656666"
                      />
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Score "
                        fontColor="#656666"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-bold pb-2"
                        text={data.lowestRuns}
                        fontColor="#9F1C34"
                      />
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Lowest "
                        fontColor="#656666"
                      />
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Score "
                        fontColor="#656666"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center ">
                <div>
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/bowling.svg" />
                </div>
                <div className="text-center w-full px-12 border bg-gray-100 rounded-md flex justify-between p-4">
                  <div>
                    <div>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-bold pb-2"
                        text={data.avgWicketPercent}
                        fontColor="#283574"
                      />
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Avg. Wickets "
                        fontColor="#656666"
                      />
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="by Pacers "
                        fontColor="#656666"
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-bold pb-2"
                        text={data.avgWicketSpin}
                        fontColor="#197F5C"
                      />
                    </div>
                    <div style={{ fontSize: "10px" }}>
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="Avg. Wickets "
                        fontColor="#656666"
                      />
                      <Text
                        fontFamily="Roboto Condensed"
                        class=" font-bold"
                        text="by Spinners "
                        fontColor="#656666"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {selectedVal == "pitch" ? (
          <PitchInsights
            hideTitle={true}
            pitchInsightsData={powerStatsData.PitchInsights}
          />
        ) : (
          ""
        )}
        {selectedVal == "toss" && window.innerWidth > "768" ? (
          <TossInsights
            hideTitle={true}
            TossInsights={powerStatsData.TossInsights}
            tossData={tossData}
          />
        ) : (
          ""
        )}
        {selectedVal == "announcedplayers" && window.innerWidth > "768" ? (
          <AnnouncedPlayers
            hideTitle={true}
            teamsdata={teamsdata}
            activeTeamMainData={activeTeamData}
            anouncedPlayersData={anouncedPlayers}
            matchKey={matchKey}
            currentTeamName={teamsdata[0]}
          />
        ) : (
          ""
        )}
      </div>
      <div className="mobile-view-container block sm:hidden mx-2">
        <div className="flex flex-row justify-between items-center">
          <Text
            fontFamily="Roboto Condensed"
            class="text-md"
            text="Top Insights"
            fontColor="#283574"
            fontWeight="900"
          />
          <div className="flex flex-row justify-end space-x-3 items-center">
            <div onClick={() => setSelectedVal("ground")}>
              <Text
                class={
                  selectedVal == "ground"
                    ? "cursor-pointer text-xs text-center border-b border-red-900"
                    : "cursor-pointer text-xs text-center"
                }
                text="Ground"
                fontColor={selectedVal == "ground" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div onClick={() => setSelectedVal("pitch")}>
              <Text
                class={
                  selectedVal == "pitch"
                    ? "cursor-pointer text-xs text-center border-b border-red-900"
                    : "cursor-pointer text-xs text-center"
                }
                text="Pitch"
                fontColor={selectedVal == "pitch" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div onClick={() => setSelectedVal("toss")}>
              <Text
                class={
                  selectedVal == "toss"
                    ? "cursor-pointer text-xs text-center border-b border-red-900"
                    : "cursor-pointer text-xs text-center"
                }
                text="Toss"
                fontColor={selectedVal == "toss" ? "#283574" : "#656666"}
                fontWeight="600"
              />
            </div>
            <div onClick={() => setSelectedVal("announcedplayers")}>
              <Text
                class={
                  selectedVal == "announcedplayers"
                    ? "cursor-pointer text-xs text-center border-b border-red-900"
                    : "cursor-pointer text-xs text-center"
                }
                text="Announced Players"
                fontColor={
                  selectedVal == "announcedplayers" ? "#283574" : "#656666"
                }
                fontWeight="600"
              />
            </div>
          </div>
        </div>
        <div className="h-40">
          {selectedVal == "ground" ? (
            <div className="flex flex-row justify-between space-x-2 items-center py-2">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4">
                  <div className="w-full flex flex-col justify-between items-center">
                    <div className="w-full flex flex-row justify-between items-center">
                      <div className="flex flex-row justify-center space-x-1 items-center">
                        <div>
                          <img
                            src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/icon-sunny.svg"
                            className="w-5 h-5"
                          />{" "}
                        </div>
                        <Text
                          fontFamily="Roboto Condensed"
                          class="text-xs"
                          text={data.temperature + "C"}
                          fontColor="#283574"
                          fontWeight="900"
                        />
                      </div>
                      <div className="flex flex-row justify-center space-x-1 items-center">
                        <div>
                          <img
                            src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/icon-rainy.svg"
                            className="w-5 h-5"
                          />{" "}
                        </div>
                        <Text
                          fontFamily="Roboto Condensed"
                          class="text-xs"
                          text={data.humidity + "%"}
                          fontColor="#283574"
                          fontWeight="900"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/stadium.png" />
                    </div>
                    <div>
                      <div className="text-center pt-2">
                        <Text
                          fontFamily="Roboto Condensed"
                          class="font-semibold"
                          text={data.groundName}
                          fontColor="#283574"
                          fontSize="0.6rem"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-8">
                  <div className="grid grid-cols-12 gap-2">
                    <div class="col-span-6 relative mt-8">
                      <div
                        className="w-8 h-8 absolute -top-4 -ml-4"
                        style={{ left: "50%" }}
                      >
                        <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/batting.png" />
                      </div>
                      <div className="w-full box1 bg-gray-100 h-20 rounded-md">
                        <div className="flex flex-row justify-between items-center p-2 pt-5 py-2">
                          <div>
                            <Text
                              fontFamily="Roboto Condensed"
                              class="text-sm font-bold pb-1"
                              text={data.avgRuns}
                              fontColor="#283574"
                            />
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="AVG. score"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="1st batting "
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                            </div>
                          </div>
                          <div>
                            <Text
                              fontFamily="Roboto Condensed"
                              class="text-sm font-bold pb-1"
                              text={data.highestRuns}
                              fontColor="#197F5C"
                            />
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="Highest"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="Score "
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="text-sm font-bold pb-1"
                                text={data.lowestRuns}
                                fontColor="#9F1C34"
                              />
                            </div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="Lowest"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="Score "
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-6 relative mt-8">
                      <div
                        className="w-8 h-8 absolute -top-4 -ml-4"
                        style={{ left: "50%" }}
                      >
                        <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/bowling.svg" />
                      </div>
                      <div className="w-full box2 bg-gray-100 h-20 rounded-md">
                        <div className="flex flex-row justify-between space-x-4 items-center pt-5 p-2">
                          <div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="text-sm font-bold text-center"
                                text={data.avgWicketPercent}
                                fontColor="#283574"
                              />
                            </div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="AVG. Wickets"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold pb-1 text-center"
                                text="by Pacers "
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="text-sm font-bold text-center"
                                text={data.avgWicketSpin}
                                fontColor="#197F5C"
                              />
                            </div>
                            <div>
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold text-center"
                                text="AVG. Wickets"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                              <Text
                                fontFamily="Roboto Condensed"
                                class="font-bold pb-1 text-center"
                                text="by Spinners"
                                fontColor="#656666"
                                fontSize="0.4rem"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {selectedVal == "pitch" ? (
            <PitchInsights
              hideTitle={true}
              pitchInsightsData={powerStatsData.PitchInsights}
            />
          ) : (
            ""
          )}
          {selectedVal == "toss" && window.innerWidth < "768" ? (
            <TossInsights
              hideTitle={true}
              TossInsights={powerStatsData.TossInsights}
              tossData={tossData}
            />
          ) : (
            ""
          )}
          {selectedVal == "announcedplayers" && window.innerWidth < "768" ? (
            <AnnouncedPlayers
              hideTitle={true}
              teamsdata={teamsdata}
              activeTeamMainData={activeTeamData}
              anouncedPlayersData={anouncedPlayers}
              matchKey={matchKey}
              currentTeamName={teamsdata[0]}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroundInsights;
