import React from "react";
import { Text } from "../../common";

const PitchInsgihts = (props) => {
  let data = {};
  if (props.pitchInsightsData) {
    props.pitchInsightsData.map((el) => {
      data["pitchScore"] = el.PitchScore;
      data["pitchSupport"] = el.PitchSupport;
      data["pitchType"] = el.PitchType;
    });
  }

  return (
    <div className="sm:p-2 rounded-md py-2">
      {!!props.hideTitle ? (
        ""
      ) : (
        <Text
          fontFamily="Roboto Condensed"
          class="text-sm font-semibold pb-1"
          text="Pitch Insights"
          fontColor="#283574"
        />
      )}
      <div className="sm:h-60 sm:px-4 grid grid-cols-12">
        <div className="col-span-4 flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            <div>
              <img
                src="https://utterai.s3.ap-south-1.amazonaws.com/img/widget/pitch.png"
                className="w-32 sm:w-36"
                style={{ webkitTransform: "scaleX(-1)" }}
              />
            </div>
            <div className="text-center">
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs font-semibold pb-1"
                text="Batting Pitch"
                fontColor="#283574"
              />
            </div>
          </div>
        </div>
        <div className="col-span-8 flex justify-center items-center w-full">
          <div className="flex flex-row h-40 space-x-4 sm:space-x-12 relative w-full">
            <div className="absolute bottom-14 left-4 sm:bottom-10 sm:left-10 text-center bg-gray-100 border rounded-full h-16 w-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs sm:text-sm font-semibold pb-1"
                text={data.pitchSupport}
                fontColor="#283574"
              />
            </div>
            <div className="absolute bottom-14 left-28 sm:left-40 text-center bg-gray-100 border rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs sm:text-sm font-semibold pb-1"
                text={data.pitchScore}
                fontColor="#283574"
              />
            </div>
            <div className="absolute bottom-0 left-16  sm:left-20 mx-auto text-center bg-gray-100 border rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <Text
                fontFamily="Roboto Condensed"
                class="text-xs sm:text-sm font-semibold pb-1"
                text={data.pitchType}
                fontColor="#283574"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchInsgihts;
