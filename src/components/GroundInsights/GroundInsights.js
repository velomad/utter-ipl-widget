import React from "react";

const GroundInsights = () => {
  return (
    <div className="p-2 border rounded-md">
      <div>Ground Insights</div>

      <div className="flex justify-between items-center py-8 px-4">
        <div className="space-y-4">
          <div className="flex justify-between w-full">
            <div className="flex space-x-2 items-center">
              <div>
                <img src="/static/images/icon-sunny.svg" />{" "}
              </div>
              <div>
                34
                <sup>
                  <span>&#176;</span>
                </sup>
                C
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <div>
                <img src="/static/images/icon-rainy.svg" />{" "}
              </div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <img src="/static/images/stadium.png" />
          </div>
          <div className="text-center">
            <div>M chinnaswamy Stadium</div>
            <div>Bengaluru, Karnataka</div>
          </div>
        </div>
        <div className="space-y-4 ">
          <div className="flex items-center ">
            <div>
              <img src="/static/images/batting.png" />
            </div>

            <div className="text-center border bg-gray-100 rounded-md flex space-x-10 p-4">
              <div>
                <div>178</div>
                <div>
                  AVG. score <br /> 1st batting
                </div>
              </div>
              <div>
                {" "}
                <div>245</div>
                <div>
                  Highest <br /> Score
                </div>
              </div>
              <div>
                <div>49</div>
                <div>
                  Lowest <br /> Score
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
                <div>178</div>
                <div>
                  AVG. score <br /> 1st batting
                </div>
              </div>
              <div>
                {" "}
                <div>245</div>
                <div>
                  Highest <br /> Score
                </div>
              </div>
              <div>
                <div>49</div>
                <div>
                  Lowest <br /> Score
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
