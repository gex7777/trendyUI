import React from "react";
import { Card } from "./components/Card";
export type Coin = {
  bg: string;
  name: string;
  icon: string;
  price: string;
  percentage: string;
  tvl: string;
  imgs: string[];
};
const coinObj: Coin[] = [
  {
    icon: "src/assets/icons/SHIBA INU (SHIB).svg",
    bg: "shib-linear-br",
    name: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    percentage: "-8.1",
    tvl: "$60,000",
    imgs: [
      "src/assets/icons/Solana (SOL).svg",
      "src/assets/icons/Ethereum (ETH).svg",
      "src/assets/icons/Binance Coin (BNB).svg",
    ],
  },
  {
    icon: "src/assets/icons/Binance Coin (BNB).svg",
    bg: "busd-linear-br",
    name: "Binance USD (BUSD)",
    price: "$1.00",
    percentage: "+0.26",
    tvl: "$60,000",
    imgs: [
      "src/assets/icons/Solana (SOL).svg",
      "src/assets/icons/Ethereum (ETH).svg",
      "src/assets/icons/Binance Coin (BNB).svg",
    ],
  },
  {
    icon: "src/assets/icons/Ethereum (ETH).svg",
    bg: "eth-linear-br",
    name: "Ethereum (ETH)",
    price: "$1,466.45",
    percentage: "-11.93",
    tvl: "$60,000",
    imgs: [
      "src/assets/icons/Solana (SOL).svg",
      "src/assets/icons/Bitcoin SV (BSV).svg",
      "src/assets/icons/Binance Coin (BNB).svg",
    ],
  },
  {
    icon: "src/assets/icons/Solana (SOL).svg",
    bg: "sol-linear-br",
    name: "Solana (SOL)",
    price: "$32.83",
    percentage: "-12.32",
    tvl: "$60,000",
    imgs: [
      "src/assets/icons/Bitcoin SV (BSV).svg",
      "src/assets/icons/Ethereum (ETH).svg",
      "src/assets/icons/Binance Coin (BNB).svg",
    ],
  },
  {
    icon: "src/assets/icons/Bitcoin SV (BSV).svg",
    bg: "bit-linear-br",
    name: "Bitcoin (BTC)",
    price: "$31,812.80",
    percentage: "+10",
    tvl: "$60,000",
    imgs: [
      "src/assets/icons/Solana (SOL).svg",
      "src/assets/icons/Ethereum (ETH).svg",
      "src/assets/icons/Binance Coin (BNB).svg",
    ],
  },
];
function App() {
  return (
    <div className="w-full h-screen flex justify-evenly items-center bg-background">
      {coinObj.reverse().map((coin) => (
        <Card coin={coin} />
      ))}
    </div>
  );
}

export default App;
