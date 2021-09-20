import React, { useState } from "react";
import { Text } from "../../common";
import {
  PitchInsights,
  TossInsights,
  AnnouncedPlayers
} from "../../components";
const GroundInsights = ({ powerStatsData }) => {
  const [selectedVal, setSelectedVal] = useState("ground");

  let data = {};

  if (powerStatsData) {
    if (powerStatsData.GroundInsights)
      powerStatsData?.GroundInsights?.Runs.map((el) => {
        data["groundName"] = el.Ground;
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
            <div onClick={() => setSelectedVal("pitch")}>
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
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/icon-sunny.svg" />{" "}
                  </div>
                  <div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-sm inline-block font-semibold pb-1"
                      text="34"
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
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/icon-rainy.svg" />{" "}
                  </div>
                  <div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-sm inline-block font-semibold pb-1"
                      text="20%"
                      fontColor="#283574"
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://utterai.s3.ap-south-1.amazonaws.com/img/stadium.png"
                  className="w-40 mx-auto"
                />
              </div>
              <div className="text-center">
                <Text
                  fontFamily="Roboto Condensed"
                  class="text-sm font-semibold pb-1"
                  text={data.groundName}
                  fontColor="#283574"
                />
                <Text
                  fontFamily="Roboto Condensed"
                  class="text-xs font-semibold pb-1"
                  text="Bengaluru, Karnataka"
                  fontColor="#283574"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div>
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/batting.png" />
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
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/bowling.svg" />
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
        {selectedVal == "pitch" ? <PitchInsights hideTitle={true} /> : ""}
        {selectedVal == "toss" ? (
          <TossInsights
            hideTitle={true}
            TossInsights={powerStatsData.TossInsights}
          />
        ) : (
          ""
        )}
        {selectedVal == "announcedplayers" && window.innerWidth > "768" ? (
          <AnnouncedPlayers hideTitle={true} />
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
                            src="https://utterai.s3.ap-south-1.amazonaws.com/img/icon-sunny.svg"
                            className="w-5 h-5"
                          />{" "}
                        </div>
                        <Text
                          fontFamily="Roboto Condensed"
                          class="text-xs"
                          text="34C"
                          fontColor="#283574"
                          fontWeight="900"
                        />
                      </div>
                      <div className="flex flex-row justify-center space-x-1 items-center">
                        <div>
                          <img
                            src="https://utterai.s3.ap-south-1.amazonaws.com/img/icon-rainy.svg"
                            className="w-5 h-5"
                          />{" "}
                        </div>
                        <Text
                          fontFamily="Roboto Condensed"
                          class="text-xs"
                          text="20%"
                          fontColor="#283574"
                          fontWeight="900"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/stadium.png" />
                    </div>
                    <div>
                      <div className="text-center pt-2">
                        <Text
                          fontFamily="Roboto Condensed"
                          class="font-semibold"
                          text="M chinnaswamy Stadium"
                          fontColor="#283574"
                          fontSize="0.6rem"
                        />
                        <Text
                          fontFamily="Roboto Condensed"
                          class="font-semibold"
                          text="Bengaluru, Karnataka"
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
                        <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/batting.png" />
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
                        <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/bowling.svg" />
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
          {selectedVal == "pitch" ? <PitchInsights hideTitle={true} /> : ""}
          {selectedVal == "toss" ? (
            <TossInsights
              hideTitle={true}
              TossInsights={powerStatsData.TossInsights}
            />
          ) : (
            ""
          )}
          {selectedVal == "announcedplayers" && window.innerWidth < "768" ? (
            <AnnouncedPlayers hideTitle={true} />
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroundInsights;
