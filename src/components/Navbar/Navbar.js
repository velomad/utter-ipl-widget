import React from "react";
import { Text } from "../../common";

function Navbar() {
  return (
    <div className="overflow-hidden">
      <div className="slnt absolute overflow-hidden"></div>
      <div className="relative z-10 flex justify-between top-2 sm:px-20 px-7">
        <img src="/static/images/csk.png" className="object-fit" />
        <div className="bg-white rounded-full h-10 w-10 mt-4 sm:mr-4 mr-10">
          <Text
            class="text-center mt-2"
            text="VS"
            fontColor="#283574"
            fontWeight="600"
          />
        </div>
        <img src="https://utterai.s3.ap-south-1.amazonaws.com/img/rcb.png" className="object-fit" />
      </div>
    </div>
  );
}

export default Navbar;
