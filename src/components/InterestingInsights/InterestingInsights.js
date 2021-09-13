import React from "react";

const InterestingInsights = () => {
  return (
    <div>
      <div className="p-2 bg-gray-100 rounded-lg space-y-4">
        <div className="text-center font-bold">
          Kieron Pollard has highest strike rate against CSK.
        </div>
        <div className="flex space-x-10 justify-center items-center">
          <div>
            <img src="/static/images/bat.svg" />
          </div>
          <div className="font-bold">133.6</div>
          <div className="font-bold">Strike Rate</div>
        </div>
      </div>
    </div>
  );
};

export default InterestingInsights;
