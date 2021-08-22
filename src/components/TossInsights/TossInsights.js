import React from "react";
import { Text } from '../../common';

const TossInsights = () => {
  return (
    <React.Fragment>
      <div className="p-2 border rounded-md h-80 hidden sm:block">
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
      <div className='mobile-view block sm:hidden '>
        <Text
          fontFamily='Roboto Condensed'
          class='text-sm font-semibold pb-1'
          text='Toss Insights'
          fontColor='#283574'
        />
        <div className='grid grid-cols-12 mt-2'>
          <div className='col-span-5'>
            <div className='flex flex-col'>
              <div>
                <div className="absolute left-16">
                  <img src="/static/images/tails.png" className='w-16 h-16' />
                </div>
                <div className="z-20">
                  <img src="/static/images/heads.png" className='w-16 h-16' />
                </div>
              </div>
              <div className='flex flex-col items-start mt-3'>
                <div className=''>
                  <Text
                    fontFamily='Roboto Condensed'
                    class='text-sm text-left font-semibold pb-1'
                    text='Time Left for toss'
                    fontColor='#656666'
                  />
                </div>
                <div className='flex flex-row justify-between space-x-2 items-start'>
                  <div>
                    <div className='bg-gray-200 rounded-full w-10 h-10'>
                      <Text
                        fontFamily='Roboto Condensed'
                        class='text-xl font-bold text-center pt-1'
                        text='00'
                        fontColor='#283574'
                      />
                    </div>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-xs font-bold text-center pt-1'
                      text='Hrs'
                      fontColor='#283574'
                    />
                  </div>
                  <div>
                    <div className='bg-gray-200 rounded-full w-10 h-10'>
                      <Text
                        fontFamily='Roboto Condensed'
                        class='text-xl font-bold text-center pt-1'
                        text='24'
                        fontColor='#283574'
                      />
                    </div>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-xs font-bold text-center pt-1'
                      text='Mins'
                      fontColor='#283574'
                    />
                  </div>
                  <div>
                    <div className='bg-gray-200 rounded-full w-10 h-10'>
                      <Text
                        fontFamily='Roboto Condensed'
                        class='text-xl font-bold text-center pt-1'
                        text='36'
                        fontColor='#283574'
                      />
                    </div>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-xs font-bold text-center pt-1'
                      text='Secs'
                      fontColor='#283574'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-7'>
            <Text
              fontFamily='Roboto Condensed'
              class='text-sm font-bold text-center'
              text='Batting Win %'
              fontColor='#283574'
            />
            <div className='grid grid-cols-12 gap-3'>
              <div className='col-span-6'>
                <div className='flex flex-row justify-center items-center'>
                  <div>
                    <img src="/static/images/one.svg" className='w-20 h-20' />
                  </div>
                  <div className='bg-white border w-16 h-16 rounded-md'>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-3xl font-bold text-center pt-3'
                      text='45'
                      fontColor='#9F1C34'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='flex flex-row justify-center items-center'>
                  <div>
                    <img src="/static/images/two.svg" className='w-20 h-20' />
                  </div>
                  <div className='bg-white border w-16 h-16 rounded-md'>
                    <Text
                      fontFamily='Roboto Condensed'
                      class='text-3xl font-bold text-center pt-3'
                      text='55'
                      fontColor='#197F5C'
                    />
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
