import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../common";

const InterestingInsights = () => {
  const [insightsCount, setInsightsCount] = useState(3);
  const showMoreInsights = () => {
    if (insightsCount == 3) {
      setInsightsCount(8);
    } else {
      setInsightsCount(3);
    }
  }
  return (
    <>
      <div className={insightsCount == 3 ? 'h-72' : 'h-72 overflow-y-auto insights-scroll '}>
        {[...new Array(insightsCount)].map(() => (
          <div className="p-2 mt-2 bg-gray-100 rounded-lg bg-gray-200">
            <div className="text-center text-xs space-y-2">
              <div>
                <Text
                  text="Kieron Pollard has highest strike rate against CSK"
                  fontColor="#707070"
                  fontWeight="700"
                />
              </div>
              <div className="flex  justify-around  items-center">
                <div>
                  <img src="/static/images/bat.svg" />
                </div>
                <div className="font-bold">133.6</div>
                <div className="font-bold">
                  <Text text="Strike Rate" fontColor="#9F1C34" fontWeight="700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div onClick={() => showMoreInsights()} className="bg-blue-200 rounded-lg text-center p-2 cursor-pointer">
          <Text text={insightsCount == 3 ? 'Show More' : 'Show Less'} fontColor="#283574" fontWeight="700" />
        </div>
      </div>
    </>
  );
};

export default InterestingInsights;
