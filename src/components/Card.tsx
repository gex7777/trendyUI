import React from "react";

export const Card = () => {
  return (
    <div className="card rounded-2xl w-72 h-96 ">
      <div className="icon rounded-b-full h-[60.5px] w-[121px]  relative mx-auto  border border-border-gradient-top bg-background border-t-0 ">
        {" "}
        <div
          className="patch-r  absolute  w-2
    h-[13px]

    top-[24px]
    left-[2px]
  origin-bottom
   skew-x-[27deg]
    z-1
    bg-[#1b1f34]
}"
        ></div>
        <div
          className="patch-l absolute  w-2
    h-[15px]
bg-[#1a1e33]
    top-[21px]
    left-[109px]
  origin-bottom
   skew-x-[153deg]
    z-10
    
}"
        ></div>
        <div className="circle aspect-square h-[100px] bg-red-500 relative mx-auto z-20 rounded-full translate-y-[-50%] "></div>
      </div>
    </div>
  );
};
