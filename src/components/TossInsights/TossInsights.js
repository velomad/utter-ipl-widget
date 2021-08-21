import React from "react";
import { Text } from '../../common';

const TossInsights = () => {
  return (
    <div className="p-2 border rounded-md ">
      <Text
        fontFamily='Roboto Condensed'
        class='text-sm font-semibold pb-1'
        text='Toss Insights'
        fontColor='#283574'
      />
      <div className="flex relative items-center justify-between py-4 px-8">
        <div className="space-y-6">
          <div>
            <div className="absolute left-28">
              <img src="/static/images/tails.png" />
            </div>
            <div className="z-20">
              <img src="/static/images/heads.png" />
            </div>
          </div>

          <div>
            <Text
              fontFamily='Roboto Condensed'
              class='text-xs font-semibold'
              text='Time left for the toss'
              fontColor='#656666'
            /></div>

          <div className="flex items-center space-x-8">
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-lg font-extrabold'
                  text='00'
                  fontColor='#283574'
                />
              </div>
              <div className="text-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-xs font-semibold'
                  text='Hrs'
                  fontColor='#283574'
                />
              </div>
            </div>
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-lg font-extrabold'
                  text='24'
                  fontColor='#283574'
                />
              </div>
              <div className="text-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-xs font-semibold'
                  text='Mins'
                  fontColor='#283574'
                /></div>
            </div>
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-lg font-extrabold'
                  text='34'
                  fontColor='#283574'
                />
              </div>
              <div className="text-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-xs font-semibold'
                  text='Secs'
                  fontColor='#283574'
                /></div>
            </div>
          </div>
        </div>

        <div className="space-y-10 ">
          <div className="text-center ">
            <Text
              fontFamily='Roboto Condensed'
              class='text-sm font-semibold pb-1'
              text='Batting win %'
              fontColor='#283574'
            /></div>
          <div className="flex items-center space-x-8">
            <div className="flex">
              <div className="flex space-x-1">
                <div>
                  <img src="/static/images/one.svg" />
                </div>
                <div>
                  <sup>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-xs p-1 font-semibold pb-1'
                      text='st'
                      fontColor='#656666'
                    />
                  </sup>
                </div>
              </div>
              <div className=" bg-gray-100 border h-28 px-6 rounded-md flex items-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-4xl font-semibold p-2'
                  text='45'
                  fontColor='#9F1C34'
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <div>
                  <img src="/static/images/two.svg" />
                </div>

                <div>
                  <sup>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-xs p-1 font-semibold'
                      text='nd'
                      fontColor='#656666'
                    />
                  </sup>
                </div>
              </div>
              <div className="bg-gray-100 border h-28 px-6 rounded-md flex items-center">
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-4xl font-semibold p-2'
                  text='55'
                  fontColor='#197F5C'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TossInsights;
