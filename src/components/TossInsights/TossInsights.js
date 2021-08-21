import React from "react";

const TossInsights = () => {
  return (
    <div className="p-2 border rounded-md ">
      <div>Toss Insights</div>

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

          <div>Time left for the toss</div>

          <div className="flex items-center space-x-8">
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                00
              </div>
              <div className="text-center">Hrs</div>
            </div>
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                24
              </div>
              <div className="text-center">Mins</div>
            </div>
            <div>
              <div className="bg-gray-100 border rounded-full h-10 w-10 flex items-center justify-center">
                36
              </div>
              <div className="text-center">Secs</div>
            </div>
          </div>
        </div>

        <div className="space-y-10 ">
          <div className="text-center ">batting win %</div>
          
          <div className="flex items-center space-x-8">
            <div className="flex">
              <div className="flex space-x-1">
                <div>
                  <img src="/static/images/one.svg" />
                </div>
                <div>
                  <sup>st</sup>
                </div>
              </div>
              <div className=" bg-gray-100 border h-32 px-10 rounded-md flex items-center">
                45
              </div>
            </div>
            <div className="flex">
              <div className="flex">
                <div>
                  <img src="/static/images/two.svg" />
                </div>

                <div>
                  <sup>nd</sup>
                </div>
              </div>
              <div className="bg-gray-100 border h-32 px-10 rounded-md flex items-center">
                55
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TossInsights;
