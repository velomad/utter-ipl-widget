import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../common";

const InterestingInsights = () => {
  return (
    <>
      {[...new Array(3)].map(() => (
        <div className="p-2 bg-gray-100 rounded-lg bg-gray-200">
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

      <div>
        <Link to="/insights">
          <div className="bg-blue-200 rounded-lg text-center p-2 cursor-pointer">
            <Text text="Show More" fontColor="#283574" fontWeight="700" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default InterestingInsights;
