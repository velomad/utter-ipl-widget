import React from "react";
import { Text } from '../../common';

export default function Headtohead(props) {
  return (
    <React.Fragment>
      <div className="main-container h-72 sm:border px-4 py-2 w-full sm:p-2 sm:pl-2 rounded-md gradient-bk">
        <Text
          fontFamily='Roboto Condensed'
          class='text-sm font-semibold pb-1'
          text='Head-to-Head'
          fontColor='#283574'
        />
        <div className="grid grid-cols-12">
          <div class="col-span-4">
            <div className="flex flex-row items-center justify-center">
              <div>
                <img
                  class="z-10 h-28 w-28 object-cover object-center mx-auto"
                  src="/static/images/dhoni.png"
                  alt="player1"
                />
              </div>
              <div>
                <img
                  class="z-0 h-16 w-16 object-cover object-center mx-auto"
                  src="/static/images/chennai_logo.png"
                  alt="player1"
                />
              </div>
            </div>
          </div>
          <div class="col-span-4">
            <Text
              fontFamily='Roboto Condensed'
              class='text-xs font-bold text-center'
              text='Matched Played: 27'
              fontColor='#283574'
            />
            <Text
              fontFamily='Roboto Condensed'
              class='text-sm font-bold text-center mt-8'
              text='VS'
              fontColor='#283574'
            />
          </div>
          <div class="col-span-4">
            <div className="flex flex-row items-center justify-center">
              <div>
                <img
                  class="z-0 h-16 w-16 object-cover object-center mx-auto"
                  src="/static/images/rcb_logo.png"
                  alt="player2"
                />
              </div>
              <div>
                <img
                  class="z-10 h-28 w-28 object-cover object-center mx-auto"
                  src="/static/images/virat.png"
                  alt="player2"
                />
              </div>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div class="col-span-4 space-y-2">
            <Text
              fontFamily='Roboto Condensed'
              class='text-md font-bold text-center'
              text='17'
              fontColor='#197F5C'
            />
            <div>
              <img src="/static/images/graph2.svg" className="mx-auto" />
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='W'
                  fontColor='#197F5C'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='W'
                  fontColor='#197F5C'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='L'
                  fontColor='#9F1C34'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='L'
                  fontColor='#9F1C34'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='W'
                  fontColor='#197F5C'
                />
              </div>
            </div>
          </div>
          <div class="col-span-4">
            <Text
              fontSize='0.7rem'
              fontFamily='Roboto Condensed'
              class='font-bold text-center mt-1'
              text='Matches Won'
              fontColor='#656666'
            />
            <Text
              fontSize='0.7rem'
              fontFamily='Roboto Condensed'
              class='font-bold text-center mt-7'
              text='Win %'
              fontColor='#656666'
            />
            <Text
              fontSize='0.7rem'
              fontFamily='Roboto Condensed'
              class='font-bold text-center mt-7'
              text='Last 5 Matches'
              fontColor='#656666'
            />
            <Text
              fontSize='0.6rem'
              fontFamily='Roboto Condensed'
              class='font-bold text-center mt-2'
              text='No Result: 1'
              fontColor='#283574'
            />
          </div>
          <div class="col-span-4 space-y-2">
            <Text
              fontFamily='Roboto Condensed'
              class='text-md font-bold text-center'
              text='09'
              fontColor='#9F1C34'
            />
            <div>
              <img src="/static/images/graph.svg" className="mx-auto" />
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='L'
                  fontColor='#9F1C34'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='L'
                  fontColor='#9F1C34'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='W'
                  fontColor='#197F5C'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='W'
                  fontColor='#197F5C'
                />
              </div>
              <div className="bg-gray-200 w-5 rounded-full">
                <Text
                  fontFamily='Roboto Condensed'
                  class='font-bold text-sm text-center'
                  text='L'
                  fontColor='#9F1C34'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
