import React from "react";

export const Card = () => {
  return (
    <div className="card-linear-br flex flex-col justify-center items-center rounded-2xl w-72 h-96 ">
      <div className="icon rounded-b-full h-[60.5px] w-[121px]  relative mx-auto  border border-border-gradient-top bg-background border-t-0 ">
        {" "}
        <div
          className="patch-l  absolute  w-2
    h-[16px]

    top-[21px]
    left-[2px]
  origin-bottom
   skew-x-[25deg]
    z-1
    bg-[#1b1f34]
}"
        ></div>
        <div
          className="patch-r absolute  w-2
    h-[15px]
bg-[#1b1f34]
    top-[21px]
    right-[2px]
  origin-bottom
   skew-x-[153deg]
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
      <div className="description w-full  h-full flex flex-col justify-evenly items-center">
        <div className="title text-slate-500">Shibu Inu</div>
        <div className="w-full grid place-items-center">
          <div className="description-box-linear-br w-9/12 h-12 grid place-items-center rounded-full relative">
            <div className="percentage-price text-indigo-50">3244423423</div>
            <div className="percentage-difference absolute right-0 text-red-500 ">
              -6.00%
            </div>
          </div>
          <div className="price text-gray-500">Price</div>
        </div>
        <div className="w-full grid place-items-center">
          <div className="description-box-linear-br w-9/12 h-12 grid place-items-center rounded-full relative">
            <div className="percentage-price text-indigo-50">3244423423</div>
          </div>
          <div className="tvl text-gray-500">TVL</div>
        </div>
        <div className="w-full grid place-items-center">
          <div className="popular-box bg-background px-4 py-2 rounded-full flex justify-evenly items-center gap-4">
            <img
              src="src/assets/icons/SHIBA INU (SHIB).svg"
              className="w-[20px]  aspect-square"
              alt=""
            />

            <img
              src="src/assets/icons/SHIBA INU (SHIB).svg"
              className="w-[20px] aspect-square"
              alt=""
            />

            <img
              src="src/assets/icons/SHIBA INU (SHIB).svg"
              className="w-[20px] aspect-square"
              alt=""
            />
          </div>
          <div className="popular text-gray-500">Popular pairs</div>
        </div>
      </div>
    </div>
  );
};
