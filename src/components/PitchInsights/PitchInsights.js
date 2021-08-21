import React from "react";
import { Text } from '../../common';

const PitchInsights = () => {
  return (
    <div className="p-2 border rounded-md">
      <Text
        fontFamily='Roboto Condensed'
        class='text-sm font-semibold pb-1'
        text='Pitch Inisghts'
        fontColor='#283574'
      />
      <div className="py-8 px-4 flex items-center justify-around">
        <div className="space-y-8">
          <div>
            <img src="/static/images/pitch.png" />
          </div>
          <div className="text-center">
            <Text
              fontFamily='Roboto Condensed'
              class='text-xs font-semibold pb-1'
              text='Batting Pitch'
              fontColor='#283574'
            />
          </div>
        </div>
        <div>
          <div className="flex space-x-12">
            <div className="text-center bg-gray-100 border rounded-full w-20 h-20 flex items-center justify-center">
              <Text
                fontFamily='Roboto Condensed'
                class='text-sm font-semibold pb-1'
                text='Help for Spinners'
                fontColor='#283574'
              />
            </div>
            <div className="text-center bg-gray-100 border rounded-full w-24 h-24 flex items-center justify-center">
              <Text
                fontFamily='Roboto Condensed'
                class='text-sm font-semibold pb-1'
                text='High Scoring Game'
                fontColor='#283574'
              />
            </div>
          </div>
          <div className="mx-auto text-center bg-gray-100 border rounded-full w-16 h-16 flex items-center justify-center">
            <Text
              fontFamily='Roboto Condensed'
              class='text-sm font-semibold pb-1'
              text='Hard Wicket'
              fontColor='#283574'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchInsights;
