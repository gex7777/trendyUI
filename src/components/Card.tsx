import React from "react";
type Coin = {
  bg: string;
  name: string;
  price: string;
  percentage: string;
  tvl: string;
  imgs: string[];
};
const coinObj: Coin[] = [
  {
    bg: "shib-linear-br",
    name: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    percentage: "-8.1%",
    tvl: "$60,000",
    imgs: [],
  },
];
export const Card = () => {
  return (
    <div className="card-linear-br flex flex-col justify-center items-center rounded-2xl w-72 h-96 font-tomorrow">
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
        <div className="title text-xs text-slate-500">Shibu Inu</div>
        <div className="w-full grid place-items-center">
          <div className="description-box-linear-br w-auto px-12 h-12 flex justify-center items-center rounded-full relative">
            <div className="percentage-price text-base text-indigo-50">
              $0.00000001948
            </div>
            <div className="percentage-difference text-xs absolute right-0 text-red-500 ">
              -8.1%
            </div>
          </div>
          <div className="price text-xs text-gray-500">Price</div>
        </div>
        <div className="w-full grid place-items-center">
          <div className="description-box-linear-br w-9/12 h-12 grid place-items-center rounded-full relative">
            <div className="tvl text-base text-indigo-50">$60,000</div>
          </div>
          <div className="tvl text-xs text-gray-500">TVL</div>
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
          <div className="popular text-xs text-gray-500">Popular pairs</div>
        </div>
      </div>
    </div>
  );
};
