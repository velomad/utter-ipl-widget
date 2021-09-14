import React from "react";
import { Text } from "../../common";

const Insights = () => {
  return (
    // <div className=" justify-center flex items-center">
    // <div className="py-10 space-y-8 px-20 ">
    <div className="grid grid-cols-2 place-items-center py-10 space-y-8 px-20">
      {[...new Array(10)].map(() => (
        <div className="p-2 bg-gray-100 rounded-lg bg-gray-200 w-96">
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
              <div className="font-bold">
                <Text text="133.6" fontColor="#707070" fontWeight="700" />
              </div>
              <div className="font-bold">
                <Text text="Strike Rate" fontColor="#9F1C34" fontWeight="700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default Insights;
