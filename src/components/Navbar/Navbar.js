import React from "react";

function Navbar() {
  return (
    <div>
      <div className="slnt absolute"></div>
      <div className="relative z-10 flex justify-between top-2 px-20">
        <img src="/static/images/csk.png" className="object-fit" />
        <img src="/static/images/rcb.png" className="object-fit" />
      </div>
    </div>
  );
}

export default Navbar;
