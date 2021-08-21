import React from "react";

const PitchInsights = () => {
  return (
    <div className="p-2 border rounded-md">
      <div>Pitch Inisghts</div>

      <div className="py-8 px-4 flex items-center justify-around">
        <div className="space-y-8">
          <div>
            <img src="/static/images/pitch.png" />
          </div>
          <div className="text-center">Batting Pitch</div>
        </div>
        <div>
          <div className="flex space-x-12">
            <div className="text-center bg-gray-100 border rounded-full w-20 h-20 flex items-center justify-center">
              Help for
              <br /> Spinners
            </div>
            <div className="text-center bg-gray-100 border rounded-full w-24 h-24 flex items-center justify-center">
              High
              <br /> Scoring
              <br /> Game
            </div>
          </div>
          <div className="mx-auto text-center bg-gray-100 border rounded-full w-16 h-16 flex items-center justify-center">
            Hard
            <br /> Wicket
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchInsights;
