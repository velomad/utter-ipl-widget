import React from "react";
import { Text } from "../../common";

const TossInsights = (props) => {
  const { TossInsights } = props;

  let data = {};
  if (TossInsights) {
    TossInsights?.BattingFirst.map((el) => {
      data["battingFirstWinPercent"] = el.WinPercent;
    });
    TossInsights?.BattingSecond.map((el) => {
      data["battingSecondWinPercent"] = el.WinPercent;
    });
  }


  return (
    <React.Fragment>
      <div className="p-2 rounded-md h-72 hidden sm:block">
        {/* <Text
          fontFamily="Roboto Condensed"
          class="text-sm font-semibold pb-1"
          text="Toss Insights"
          fontColor="#283574"
        /> */}
        <div className="flex relative justify-between px-4 items-center py-4 ">
          <div className="space-y-6">
            <div className="">
              <div className="absolute left-20">
                <img
                  src="https://utterai.s3.ap-south-1.amazonaws.com/img/tails.png"
                  className="w-20  right-10"
                />
              </div>
              <div className="z-20">
                <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/heads.png" className="w-20" />
              </div>
            </div>

            <div>
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs font-semibold"
                text="Time left for the toss"
                fontColor="#656666"
              />
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <div className="bg-gray-100 border rounded-full h-12 w-12 flex items-center justify-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-lg font-extrabold"
                    text="00"
                    fontColor="#283574"
                  />
                </div>
                <div className="text-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-sm "
                    text="Hrs"
                    fontColor="#283574"
                  />
                </div>
              </div>
              <div>
                <div className="bg-gray-100 border rounded-full h-12 w-12 flex items-center justify-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-lg font-extrabold"
                    text="24"
                    fontColor="#283574"
                  />
                </div>
                <div className="text-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-sm "
                    text="Mins"
                    fontColor="#283574"
                  />
                </div>
              </div>
              <div>
                <div className="bg-gray-100 border rounded-full h-12 w-12 flex items-center justify-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-lg font-extrabold"
                    text="34"
                    fontColor="#283574"
                  />
                </div>
                <div className="text-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-sm "
                    text="Secs"
                    fontColor="#283574"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 ">
            <div className="text-center ">
              <Text
                fontFamily="Roboto Condensed"
                class="text-sm font-semibold pb-1"
                text="Batting win %"
                fontColor="#283574"
              />
            </div>
            <div className="flex ">
              <div className="flex relative space-x-9">
                <div className="flex space-x-3">
                  <div className="absolute left-2 right-2">
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/one.svg" className="w-8 " />
                  </div>
                  <div className="absolute left-8">
                    <sup>st</sup>
                  </div>
                </div>
                <div className=" bg-gray-100 z-10 mt-4 border mr-4 h-28 justify-center px-2 w-24 rounded-md flex items-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-3xl font-semibold p-2"
                    text={data.battingFirstWinPercent}
                    fontColor="#9F1C34"
                  />
                </div>
              </div>
              <div className="flex relative space-x-14">
                <div className="absolute left-2 right-2">
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/two.svg" className="w-14" />
                </div>
                <div className="absolute left-4">
                  <sup>nd</sup>
                </div>
                <div className="bg-gray-100 border mt-4 h-26 z-10 px-2 w-24 text-center rounded-md flex items-center justify-center">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-3xl font-semibold p-2"
                    text={data.battingSecondWinPercent}
                    fontColor="#197F5C"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view block sm:hidden py-2">
        {!!props.hideTitle ? (
          ""
        ) : (
          <Text
            fontFamily="Roboto Condensed"
            class="text-sm font-semibold pb-1"
            text="Toss Insights"
            fontColor="#283574"
          />
        )}
        <div className="grid grid-cols-12 mt-2">
          <div className="col-span-5">
            <div className="flex flex-col">
              <div>
                <div className="absolute left-16">
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/tails.png" className="w-16 h-16" />
                </div>
                <div className="z-20">
                  <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/heads.png" className="w-16 h-16" />
                </div>
              </div>
              <div className="flex flex-col items-start mt-3">
                <div className="">
                  <Text
                    fontFamily="Roboto Condensed"
                    class="text-sm text-left font-semibold pb-1"
                    text="Time Left for toss"
                    fontColor="#656666"
                  />
                </div>
                <div className="flex flex-row justify-between space-x-2 items-start">
                  <div>
                    <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-sm font-bold text-center"
                        text="00"
                        fontColor="#283574"
                      />
                    </div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-xs font-bold text-center pt-1"
                      text="Hrs"
                      fontColor="#283574"
                    />
                  </div>
                  <div>
                    <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-sm font-bold text-center"
                        text="24"
                        fontColor="#283574"
                      />
                    </div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-xs font-bold text-center pt-1"
                      text="Mins"
                      fontColor="#283574"
                    />
                  </div>
                  <div>
                    <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-sm font-bold text-center"
                        text="36"
                        fontColor="#283574"
                      />
                    </div>
                    <Text
                      fontFamily="Roboto Condensed"
                      class="text-xs font-bold text-center pt-1"
                      text="Secs"
                      fontColor="#283574"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <Text
              fontFamily="Roboto Condensed"
              class="text-xs font-bold text-center pt-4"
              text="Batting Win %"
              fontColor="#283574"
            />
            <div className="grid grid-cols-12 pt-4">
              <div className="col-span-6">
                <div className="flex flex-row justify-between items-center relative">
                  <div>
                    <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/one.svg" className="w-20 h-14" />
                  </div>
                  <div className="flex flex-col items-start">
                    <Text
                      fontFamily="Roboto Condensed"
                      class="absolute -top-1 left-12 text-xs font-extrabold text-center"
                      text="st"
                      fontColor="#656666"
                    />
                    <div className="z-60 absolute bottom-0 left-12 bg-white border w-11 h-10 rounded-md flex justify-center items-center">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-extrabold text-center"
                        text="45"
                        fontColor="#9F1C34"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-row justify-center items-center">
                  <div class="relative">
                    <div>
                      <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/two.svg" className="w-20 h-14" />
                    </div>
                    <div className="flex flex-col items-start">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="absolute -top-1 left-16 text-xs font-extrabold text-center"
                        text="nd"
                        fontColor="#656666"
                      />
                    </div>
                    <div className="z-60 absolute bottom-0 left-12 bg-white border w-10 h-10 rounded-md flex justify-center items-center">
                      <Text
                        fontFamily="Roboto Condensed"
                        class="text-xl font-extrabold text-center"
                        text="55"
                        fontColor="#197F5C"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TossInsights;
