import React from "react";
import { Text } from "../../common";

function Navbar() {
  return (
    <div>
      <div className="slnt absolute"></div>
      <div className="relative z-10 flex justify-between top-2 px-20">
        <img src="/static/images/csk.png" className="object-fit" />
        <div className='bg-white rounded-full h-12 w-12 mt-3'>
          <Text
            class='text-center mt-3'
            text="VS"
            fontColor="#283574"
            fontWeight="600"
          />
        </div>
        <img src="/static/images/rcb.png" className="object-fit" />
      </div>
    </div>
  );
}

export default Navbar;
