import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../common";

const InterestingInsights = () => {
  const data = [
    "Among top order batsmen, Suresh Raina is the highest scorer with 513 runs against RCB",
    "In the middle order, MS Dhoni has scored the highest - 254 runs against RCB",
    "Virat Kohli has scored 30+ runs 14 times against CSK",
    "RA Jadeja has taken 2 Wickets or more, 6 times against RCB",
    "29 pacers have taken 97 wickets while 13 Spinners have taken 32 wickets for CSK against RCB",
    "Imran Tahir has the best bowling figures of 4 overs 9 runs 3 wickets against RCB",
    "Harhal Patel is the most expensive bowler having an economy rate 8 or more 3 times against CSK"
  ];

  const [insightsCount, setInsightsCount] = useState(4);
  const showMoreInsights = () => {
    if (insightsCount == 4) {
      setInsightsCount(8);
    } else {
      setInsightsCount(4);
    }
  };

  return (
    <>
      <div
        className={
          insightsCount == 4 ? "h-72" : "h-72 overflow-y-auto insights-scroll "
        }
      >
        {[...new Array(insightsCount)].map((el, index) => (
          <div className="p-2 mt-2 bg-gray-100 rounded-lg bg-gray-200">
            <div className="text-center text-xs space-y-2">
              <div className="py-1">
                <Text text={data[index]} fontColor="#707070" fontWeight="700" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div
          onClick={() => showMoreInsights()}
          className="bg-blue-200 rounded-lg text-center p-2 cursor-pointer"
        >
          <Text
            text={insightsCount == 4 ? "Show More" : "Show Less"}
            fontColor="#283574"
            fontWeight="700"
          />
        </div>
      </div>
    </>
  );
};

export default InterestingInsights;
