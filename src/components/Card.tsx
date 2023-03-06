import React from "react";
import { Coin } from "../App";
interface Props {
  coin: Coin;
}
export const Card = ({ coin }: Props) => (
  <div className="card-linear-br flex flex-col justify-center items-center rounded-2xl w-72 h-96 font-tomorrow">
    <div className="icon rounded-b-full h-[60.5px] w-[121px]  relative mx-auto  border border-[#2a2d41] bg-background border-t-0 ">
      {" "}
      <div
        className="patch-l  absolute  w-2
    h-[15px]

    top-[18px]
    left-0
  origin-bottom
   skew-x-[25deg]
    z-10
    bg-gradient-to-r from-[#1c2035] to-[#1c2034]
}"
      ></div>
      <div
        className="patch-r absolute  w-2
    h-[15px]
bg-gradient-to-r from-[#1c2035] to-[#1c2034]
    top-[18px]
    right-0
  origin-bottom
   skew-x-[155deg]
    z-10
    
}"
      ></div>
      <div
        className={
          coin.bg +
          " grid place-items-center aspect-square h-[100px] relative mx-auto z-20 rounded-full translate-y-[-50%] "
        }
      >
        <img src={coin.icon} className="w-[50px] aspect-square" alt="" />
      </div>
    </div>
    <div className="description w-full  h-full flex flex-col justify-evenly items-center">
      <div className="title text-xs text-[#737BAE]">{coin.name}</div>
      <div className="w-full grid place-items-center">
        <div className="description-box-linear-br w-5/6 px-2 h-12 flex justify-center items-center rounded-[20px] relative">
          <div className="percentage-price text-base text-indigo-50">
            {coin.price}
          </div>
          <div
            className={` percentage-difference text-xs absolute right-2 ${
              parseInt(coin.percentage) < 0 ? "text-red-500" : "text-[#00FFA3]"
            }`}
          >
            {coin.percentage}%
          </div>
        </div>
        <div className="price text-xs text-gray-500">Price</div>
      </div>
      <div className="w-full grid place-items-center">
        <div className="description-box-linear-br w-5/6 h-12 grid place-items-center rounded-[20px] relative">
          <div className="tvl text-base text-indigo-50">{coin.tvl}</div>
        </div>
        <div className="tvl text-xs text-gray-500">TVL</div>
      </div>
      <div className="w-full grid place-items-center">
        <div className="popular-box bg-background px-4 py-2 rounded-full flex justify-evenly items-center gap-4">
          {coin.imgs.map((src) => (
            <img src={src} className="w-[20px]  aspect-square" alt="" />
          ))}
        </div>
        <div className="popular text-xs text-gray-500">Popular pairs</div>
      </div>
    </div>
  </div>
);
