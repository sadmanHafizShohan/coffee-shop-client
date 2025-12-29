import React from "react";
import logoPng from "/images/more/logo.png";
const Header = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/more/header.jpg')`,
      }}
    >
      <div className="flex items-center justify-center h-full">
        <img className="h-15 w-15" src={logoPng} alt="" />
        <h1 className="text-white font-rancho text-center text-5xl font-bold drop-shadow-lg p-5">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Header;
