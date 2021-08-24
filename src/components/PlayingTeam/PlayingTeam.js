import React from "react";
import { Text } from "../../common";

const PlayingTeam = () => {
  const data = [
    "Sam Curran has taken Virat Kohli's wicket 8 times in IPL",
    "Suresh Raina has an average of 43 against RCB",
    "Harshal Patel has taken two wickets 5 times againtst CSK",
  ];

  return (
    <div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-9 border rounded-md">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-2 p-2 space-y-6">
                <div className="">
                  <Text
                    text="Playing XI"
                    fontColor="#283574"
                    fontWeight="700"
                  />
                </div>
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
                        src="/static/images/wildcard.png"
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
                        src={`/static/images/${index + 1}.png`}
                        className="w-20"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-gray-100 border rounded-md space-y-4 p-4">
            <div>
              <img src="/static/images/cricket.png" className="mx-auto" />
            </div>

            <div>
              <Text
                text="UtterAI Interesting 
            Insights"
                fontColor="#283574"
                fontWeight="700"
              />
            </div>

            <div>
              {data.map((el, index) => (
                <div className="flex space-x-2 space-y-4">
                  <div className="mt-4" style={{ color: "#707070" }}>
                    {index + 1}
                    <span>.</span>
                  </div>
                  <div>
                    <Text
                      text={el}
                      fontColor="#707070"
                      fontSize="14px"
                      fontWeight="600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view block sm:hidden">
        <Text
          class="text-md text-center font-bold pb-2"
          text="UtterAI Interesting 
            Insights"
          fontColor="#283574"
          fontWeight="700"
        />
        <div className="grid grid-cols-12">
          <div class="col-span-3">
            <img src="/static/images/cricket.png" className="w-10 mx-auto" />
          </div>
          <div class="col-span-9">
            <div className='flex flex-col items-start'>
              {
                data.map((el, index) => {
                  return <Text text={index + 1 + ". " + el} fontWeight="bolder" class='text-left font-extrabold' fontSize="0.6rem" fontColor="#1E1E58" />
                })
              }
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-4 gap-2 pt-2 gradient-bk'>
          <div class="col-span-4 px-2">
            <Text
              class='text-xs text-left font-bold pb-1'
              text="Playing XI"
              fontColor="#283574"
              fontWeight="700"
            />
            <Text
              class='text-left font-bold'
              text="Utter's recommended playing XI for the match"
              fontColor="#707070"
              fontWeight="700"
              fontSize="0.5rem"
            />
          </div>
          <div class="col-span-8 px-2">
            <div class="w-full">
              <div class="h-full flex items-center border-gray-200 border p-1 rounded-lg">
                <div className='flex flex-col items-center'>
                  <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-2" src="/static/images/dhoni.png" />
                  <div className='bg-indigo-700 w-12 text-left mr-2'>
                    <Text
                      class='text-center font-bold'
                      text="Dhoni"
                      fontColor="#FFF"
                      fontWeight="700"
                      fontSize="0.5rem"
                    />
                  </div>
                </div>
                <div class="flex-grow items-center">
                  <Text
                    class='w-40 text-left font-bold'
                    text="“An exceptional bowler with great line and length. He could be the joker everyone wants in their deck of the playing XI.”"
                    fontColor="#656666"
                    fontWeight="700"
                    fontSize="0.5rem"
                  />
                  <Text
                    class='text-right font-bold pr-2'
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
        <div className='flex flex-nowrap items-center mt-4 px-2'>
          <div className="grid grid-cols-4 place-items-center gap-6">
            {[...new Array(11)].map((e, index) => (
              <div>
                <img src={`/static/images/${index + 1}.png`} className="w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingTeam;
