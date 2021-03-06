import React, { useState } from "react";
import { TopPerformers } from "..";
import { Text } from "../../common";
import InterestingInsights from "../InterestingInsights";

const PlayingTeam = ({ powerStatsData }) => {
  const [section, setSection] = useState(0);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const data = [
    "Among top order batsmen, Suresh Raina is the highest scorer with 513 runs against RCB",
    "In the middle order, MS Dhoni has scored the highest - 254 runs against RCB",
    "Virat Kohli has scored 30+ runs 14 times against CSK",
    "RA Jadeja has taken 2 Wickets or more, 6 times against RCB",
    "29 pacers have taken 97 wickets while 13 Spinners have taken 32 wickets for CSK against RCB",
    "Imran Tahir has the best bowling figures of 4 overs 9 runs 3 wickets against RCB",
    "Harhal Patel is the most expensive bowler having an economy rate 8 or more 3 times against CSK"
  ];

  return (
    <div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9 border rounded-md relative">
            <div className="flex space-x-10 text-sm px-2 py-2">
              <div className="cursor-pointer" onClick={() => setSection(0)}>
                <Text
                  text="Top performers in last 5 matches"
                  fontColor={section === 0 ? `#283574` : "#707070"}
                  fontWeight="700"
                />
              </div>
              <div className="cursor-pointer" onClick={() => setSection(1)}>
                <Text
                  text="Recommended playing XI"
                  fontColor={section === 1 ? `#283574` : "#707070"}
                  fontWeight="700"
                />
              </div>
            </div>

            {section === 1 ? (
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2 p-2 space-y-6">
                  <div className="">
                    <Text
                      fontSize="12px"
                      text="Utter's recommedned playing 11 for the match"
                      fontColor="#707070"
                      fontWeight="600"
                    />
                  </div>

                  <div className="rounded-md">
                    <div
                      className="text-center text-white"
                      style={{ backgroundColor: "#283574" }}
                    >
                      <Text text="Wildcard" fontColor="#fff" />
                    </div>
                    <div className="bg-gray-100 py-8 space-y-4">
                      <div>
                        <img
                          src="https://utterai.s3.ap-south-1.amazonaws.com/img/wildcard.png"
                          className="mx-auto"
                        />
                      </div>

                      <div className="px-4">
                        <p>
                          <Text
                            fontSize="12px"
                            text='"An exceptional bowler with great line and length. He
                      could be the joker everyone wants in their deck of the
                      playing XI. "'
                            fontColor="#707070"
                            fontWeight="700"
                          />
                        </p>
                        <div className=" float-right px-2">
                          <Text
                            text="-Utter.Ai"
                            fontColor="#283574"
                            fontWeight="700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 py-8">
                  <div className="grid grid-cols-4 place-items-center gap-6">
                    {[...new Array(11)].map((e, index) => (
                      <div>
                        <img
                          src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${index + 1}.png`}
                          className="w-20"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <TopPerformers TopPerformer={powerStatsData.TopPerformer} />
            )}
          </div>

          <div className="col-span-3 bg-gray-100 border rounded-md space-y-4 p-4">
            <div>
              <img
                src="https://utterai.s3.ap-south-1.amazonaws.com/img/cricket.png"
                className="mx-auto"
                width="40px"
              />
            </div>

            <div className="text-center text-sm">
              <Text
                text="UtterAI Interesting 
            Insights"
                fontColor="#283574"
                fontWeight="700"
              />
            </div>
            <InterestingInsights topInsights={powerStatsData.TopInsights}  />
          </div>
        </div>
      </div>
      <div className="mobile-view block sm:hidden py-2">
        <div className="flex flex-row items-start px-4 space-x-4">
          <div>
            <div className="flex flex-col items-start">
              <Text
                class="text-xs font-bold pb-2"
                text="UtterAI Interesting 
            Insights"
                fontColor="#283574"
                fontWeight="700"
              />
              <div
                className={
                  !isDropDownVisible
                    ? "h-24 overflow-y-auto"
                    : "h-96 overflow-y-auto"
                }
              >
                <div class="w-full pb-2">
                  <div class="h-full flex items-start border-gray-200 border p-3 rounded-lg">
                    <div class="flex-grow">
                      <Text
                        class="text-center text-sm"
                        text="Among top order batsmen, Suresh Raina is the highest scorer with 513 runs against RCB"
                        fontColor="#707070"
                        fontWeight="700"
                      />
                      {/* <div className="flex mt-1 justify-around  items-center">
                        <div>
                          <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/bat.svg" />
                        </div>
                        <Text
                          class="text-center text-sm"
                          text="133.6"
                          fontColor="#707070"
                          fontWeight="700"
                        />
                        <div className="font-bold">
                          <Text
                            text="Strike Rate"
                            class="text-sm"
                            fontColor="#9F1C34"
                            fontWeight="700"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {isDropDownVisible
                  ? data.map((el, index) => (
                      <div class="w-full mt-2">
                        <div class="h-full flex items-start border-gray-200 border p-4 rounded-lg">
                          <div class="flex-grow">
                            <Text
                              class="text-center text-sm"
                              text={el}
                              fontColor="#707070"
                              fontWeight="700"
                            />
                            {/* <div className="flex mt-1 justify-around  items-center">
                              <div>
                                <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/bat.svg" />
                              </div>
                              <Text
                                class="text-center text-sm"
                                text="133.6"
                                fontColor="#707070"
                                fontWeight="700"
                              />
                              <div className="font-bold">
                                <Text
                                  text="Strike Rate"
                                  class="text-sm"
                                  fontColor="#9F1C34"
                                  fontWeight="700"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div
            className="mt-10"
            onClick={() => setIsDropDownVisible(!isDropDownVisible)}
          >
            {!isDropDownVisible ? (
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                class="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 gap-2 pt-2 gradient-bk">
          <div class="col-span-4 px-2">
            <Text
              class="text-xs text-left font-bold pb-1"
              text="Playing XI"
              fontColor="#283574"
              fontWeight="700"
            />
            <Text
              class="text-left font-bold"
              text="Utter's recommended playing XI for the match"
              fontColor="#707070"
              fontWeight="700"
              fontSize="0.5rem"
            />
          </div>
          <div class="col-span-8 px-2">
            <div class="w-full">
              <div class="h-full flex items-center border-gray-200 border p-1 rounded-lg">
                <div className="flex flex-col items-center">
                  <img
                    alt="team"
                    class="p-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-2"
                    src="https://utterai.s3.ap-south-1.amazonaws.com/img/wildcard.png"
                  />
                  {/* <div className='bg-indigo-700 w-12 text-left mr-2'>
                    <Text
                      class='text-center font-bold'
                      text="Dhoni"
                      fontColor="#FFF"
                      fontWeight="700"
                      fontSize="0.5rem"
                    />
                  </div> */}
                </div>
                <div class="flex-grow items-center">
                  <Text
                    class="text-left font-bold"
                    text="???An exceptional bowler with great line and length. He could be the joker everyone wants in their deck of the playing XI.???"
                    fontColor="#656666"
                    fontWeight="700"
                    fontSize="0.5rem"
                  />
                  <Text
                    class="text-right font-bold pr-2"
                    text="-UtterAi"
                    fontColor="#283574"
                    fontWeight="700"
                    fontSize="0.7rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-nowrap items-center mt-4 px-2">
          <div className="grid grid-cols-4 place-items-center gap-6">
            {[...new Array(11)].map((e, index) => (
              <div>
                <img src={`https://utterai.s3.ap-south-1.amazonaws.com/img/${index + 1}.png`} className="w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingTeam;
