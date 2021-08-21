import React from "react";
import { Text } from '../../common';

const GroundInsights = () => {
  return (
    <div className="p-2 border rounded-md">
      <Text
        fontFamily='Roboto Condensed'
        class='text-sm font-semibold pb-1'
        text='Ground Insights'
        fontColor='#283574'
      />
      <div className="flex justify-between items-center py-8 px-4">
        <div className="space-y-4">
          <div className="flex justify-between w-full">
            <div className="flex space-x-2 items-center">
              <div>
                <img src="/static/images/icon-sunny.svg" />{" "}
              </div>
              <div>
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-sm inline-block font-semibold pb-1'
                  text='34'
                  fontColor='#9F1C34'
                />
                <div className='inline-block'>
                  <sup>
                    <span>&#176;</span>
                  </sup>
                </div>
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-sm inline-block font-semibold pb-1'
                  text='C'
                  fontColor='#9F1C34'
                />
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div>
                <img src="/static/images/icon-rainy.svg" />{" "}
              </div>
              <div>
                <Text
                  fontFamily='Roboto Condensed'
                  class='text-sm inline-block font-semibold pb-1'
                  text='20%'
                  fontColor='#283574'
                />
              </div>
            </div>
          </div>
          <div>
            <img src="/static/images/stadium.png" />
          </div>
          <div className="text-center">
            <Text
              fontFamily='Roboto Condensed'
              class='text-sm font-semibold pb-1'
              text='M chinnaswamy Stadium'
              fontColor='#283574'
            />
            <Text
              fontFamily='Roboto Condensed'
              class='text-xs font-semibold pb-1'
              text='Bengaluru, Karnataka'
              fontColor='#283574'
            />
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="flex items-center ">
            <div>
              <img src="/static/images/batting.png" />
            </div>

            <div className="text-center border bg-gray-100 rounded-md flex space-x-10 p-4">
              <div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xl font-bold pb-3'
                    text='178'
                    fontColor='#283574'
                  />
                </div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='AVG. score '
                    fontColor='#656666'
                  />
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold pb-1'
                    text='1st batting '
                    fontColor='#656666'
                  />
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xl font-bold pb-3'
                    text='245'
                    fontColor='#197F5C'
                  />
                </div>
                <div>

                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='Highest '
                    fontColor='#656666'
                  />
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='Score '
                    fontColor='#656666'
                  />
                </div>
              </div>
              <div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xl font-bold pb-3'
                    text='49'
                    fontColor='#9F1C34'
                  />
                </div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='Lowest '
                    fontColor='#656666'
                  />
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='Score '
                    fontColor='#656666'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center ">
            <div>
              <img src="/static/images/bowling.svg" />
            </div>
            <div className="text-center border bg-gray-100 rounded-md flex space-x-10 p-4">
              <div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xl font-bold pb-3'
                    text='4'
                    fontColor='#283574'
                  />
                </div>
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='AVG. Wickets '
                    fontColor='#656666'
                  />
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='by Pacers '
                    fontColor='#656666'
                  />
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xl font-bold pb-3'
                    text='6'
                    fontColor='#197F5C'
                  />
                </div>
                <div>
                <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='AVG. Wickets '
                    fontColor='#656666'
                  />
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-xs font-bold'
                    text='by Spinners '
                    fontColor='#656666'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundInsights;
