import React from "react";

export const Card = () => {
  return (
    <div className="card-linear-br rounded-2xl w-72 h-96 ">
      <div className="icon rounded-b-full h-[60.5px] w-[121px]  relative mx-auto  border border-border-gradient-top bg-background border-t-0 ">
        {" "}
        <div
          className="patch-r  absolute  w-2
    h-[16px]

    top-[21px]
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
bg-[#1b1f34]
    top-[21px]
    right-[1px]
  origin-bottom
   skew-x-[157deg]
    z-10
    
}"
        ></div>
        <div className="shib-linear-br grid place-items-center aspect-square h-[100px] relative mx-auto z-20 rounded-full translate-y-[-50%] ">
          <img
            src="src/assets/icons/SHIBA INU (SHIB).svg"
            className="w-[50px] aspect-square"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
